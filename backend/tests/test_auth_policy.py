import unittest
from types import SimpleNamespace

from fastapi import HTTPException
from pydantic import ValidationError

from app.schemas.auth import RegisterRequest
from app.services.auth import admin_required


class AuthenticationPolicyTests(unittest.TestCase):
    def test_public_registration_cannot_submit_a_role(self):
        with self.assertRaises(ValidationError):
            RegisterRequest(
                username="new-user",
                email="new-user@example.com",
                password="correct-horse-battery-staple",
                role="admin",
            )

    def test_registration_requires_a_reasonable_password_length(self):
        with self.assertRaises(ValidationError):
            RegisterRequest(
                username="new-user",
                email="new-user@example.com",
                password="too-short",
            )

    def test_non_administrators_cannot_perform_administrative_actions(self):
        with self.assertRaises(HTTPException) as error:
            admin_required(SimpleNamespace(role="user"))
        self.assertEqual(error.exception.status_code, 403)

    def test_administrators_can_perform_administrative_actions(self):
        self.assertIsNone(admin_required(SimpleNamespace(role="admin")))


if __name__ == "__main__":
    unittest.main()
