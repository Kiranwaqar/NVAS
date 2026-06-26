import ipaddress
import re
from fastapi import HTTPException

def validate_network_size(target):
    try:
        if "/" in target:
            network = ipaddress.ip_network(target, strict=False)

            if network.num_addresses > 256:
                raise HTTPException(
                    status_code=403,
                    detail="Network too large (max 256 hosts)"
                )
    except:
        pass
    
def validate_target(target: str):
    # Block localhost
    blocked_targets = [
        "127.0.0.1",
        "localhost",
        "0.0.0.0",
        "::1"
    ]

    if target in blocked_targets:
        raise HTTPException(
            status_code=403,
            detail="Scanning localhost/internal targets is blocked"
        )

    # Block huge internet-wide scans
    if target == "0.0.0.0/0":
        raise HTTPException(
            status_code=403,
            detail="Full internet scan is not allowed"
        )

    # Check if valid IP/CIDR
    try:
        if "/" in target:
            ipaddress.ip_network(target, strict=False)
        else:
            ipaddress.ip_address(target)

        return True

    except:
        pass

    # Check hostname
    hostname_pattern = r"^[a-zA-Z0-9.-]+$"

    if re.match(hostname_pattern, target):
        return True

    raise HTTPException(
        status_code=400,
        detail="Invalid target format"
    )