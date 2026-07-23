import os
import unittest
from unittest.mock import patch

from fastapi import HTTPException

from app.services.validator import validate_target


class TargetValidationTests(unittest.TestCase):
    def setUp(self):
        self.environment = os.environ.copy()
        os.environ["ALLOWED_SCAN_NETWORKS"] = "192.168.1.0/24"
        os.environ["MAX_SCAN_HOSTS"] = "256"

    def tearDown(self):
        os.environ.clear()
        os.environ.update(self.environment)

    def assert_rejected(self, target, status_code):
        with self.assertRaises(HTTPException) as error:
            validate_target(target)
        self.assertEqual(error.exception.status_code, status_code)

    def test_accepts_an_address_in_an_authorized_network(self):
        self.assertTrue(validate_target("192.168.1.10"))

    def test_accepts_an_authorized_network_within_the_host_limit(self):
        self.assertTrue(validate_target("192.168.1.0/24"))

    def test_rejects_an_address_outside_authorized_networks(self):
        self.assert_rejected("10.0.0.1", 403)

    def test_rejects_a_network_larger_than_the_host_limit(self):
        os.environ["ALLOWED_SCAN_NETWORKS"] = "10.0.0.0/8"
        self.assert_rejected("10.0.0.0/16", 403)

    def test_rejects_scanning_when_no_authorized_network_is_configured(self):
        os.environ.pop("ALLOWED_SCAN_NETWORKS")
        self.assert_rejected("192.168.1.10", 503)

    @patch("app.services.validator.socket.getaddrinfo")
    def test_accepts_a_hostname_resolved_inside_an_authorized_network(self, getaddrinfo):
        getaddrinfo.return_value = [(None, None, None, None, ("192.168.1.20", 0))]
        self.assertTrue(validate_target("scanner.internal"))

    @patch("app.services.validator.socket.getaddrinfo")
    def test_rejects_a_hostname_resolved_outside_an_authorized_network(self, getaddrinfo):
        getaddrinfo.return_value = [(None, None, None, None, ("10.0.0.20", 0))]
        self.assert_rejected("untrusted.internal", 403)


if __name__ == "__main__":
    unittest.main()
