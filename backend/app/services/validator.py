import ipaddress
import os
import re
import socket
from fastapi import HTTPException

HOSTNAME_PATTERN = re.compile(r"^(?=.{1,253}$)(?:[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?\.)*[A-Za-z0-9][A-Za-z0-9-]{0,61}[A-Za-z0-9]?$")


def _allowed_networks() -> list[ipaddress.IPv4Network | ipaddress.IPv6Network]:
    values = [value.strip() for value in os.getenv("ALLOWED_SCAN_NETWORKS", "").split(",") if value.strip()]
    if not values:
        raise HTTPException(
            status_code=503,
            detail="Scanning is disabled until ALLOWED_SCAN_NETWORKS is configured",
        )

    try:
        return [ipaddress.ip_network(value, strict=False) for value in values]
    except ValueError as exc:
        raise HTTPException(
            status_code=503,
            detail="ALLOWED_SCAN_NETWORKS contains an invalid CIDR",
        ) from exc


def _max_scan_hosts() -> int:
    try:
        return max(1, int(os.getenv("MAX_SCAN_HOSTS", "256")))
    except ValueError:
        return 256


def _is_allowed(address: ipaddress.IPv4Address | ipaddress.IPv6Address, networks: list[ipaddress.IPv4Network | ipaddress.IPv6Network]) -> bool:
    return any(address.version == network.version and address in network for network in networks)


def _validate_network_size(network: ipaddress.IPv4Network | ipaddress.IPv6Network) -> None:
    if network.num_addresses > _max_scan_hosts():
        raise HTTPException(
            status_code=403,
            detail=f"Network too large (max {_max_scan_hosts()} addresses)",
        )


def validate_target(target: str) -> bool:
    """Accept only targets contained in the operator-approved scan networks."""
    target = target.strip()
    if not target:
        raise HTTPException(status_code=400, detail="A scan target is required")

    networks = _allowed_networks()

    try:
        if "/" in target:
            network = ipaddress.ip_network(target, strict=False)
            _validate_network_size(network)
            if not any(network.version == allowed.version and network.subnet_of(allowed) for allowed in networks):
                raise HTTPException(status_code=403, detail="Target network is not authorized for scanning")
        else:
            address = ipaddress.ip_address(target)
            if not _is_allowed(address, networks):
                raise HTTPException(status_code=403, detail="Target address is not authorized for scanning")
        return True
    except ValueError:
        pass

    if not HOSTNAME_PATTERN.fullmatch(target) or target.lower() == "localhost":
        raise HTTPException(status_code=400, detail="Invalid target format")

    try:
        addresses = {
            ipaddress.ip_address(item[4][0])
            for item in socket.getaddrinfo(target, None, type=socket.SOCK_STREAM)
        }
    except socket.gaierror as exc:
        raise HTTPException(status_code=400, detail="Target hostname could not be resolved") from exc

    if not addresses or not all(_is_allowed(address, networks) for address in addresses):
        raise HTTPException(status_code=403, detail="Target hostname resolves outside authorized scan networks")
    return True
