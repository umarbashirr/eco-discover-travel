import React from "react";
import { Mail, PhoneCall } from "lucide-react";
import Link from "next/link";
import { Container } from "./container";

export const TopNavbar = () => {
  return (
    <div className="w-full bg-white border-b py-4">
      <Container className="flex flex-col md:flex-row items-center md:justify-between gap-4">
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
          <Link
            href="mailto:info@ecodiscovertravel.com"
            className="flex items-center gap-2 text-sm font-medium"
          >
            <Mail className="w-4 h-4" /> <span>info@ecodiscovertravel.com</span>
          </Link>
          <Link
            href="tel:+917006853438"
            className="flex items-center gap-2 text-sm font-medium"
          >
            <PhoneCall className="w-4 h-4" /> <span>+91 7006853438</span>
          </Link>
        </div>
        <nav className="flex items-center gap-4">
          <Link
            href="/terms-and-conditions"
            className="flex items-center gap-2 text-sm font-medium"
          >
            Terms & Conditions
          </Link>
          <Link
            href="/privacy-policy"
            className="flex items-center gap-2 text-sm font-medium"
          >
            Privacy Policy
          </Link>
        </nav>
      </Container>
    </div>
  );
};
