import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/logo.svg"
        alt="Eco Discover Travel Logo"
        width={173}
        height={36}
      />
    </Link>
  );
};
