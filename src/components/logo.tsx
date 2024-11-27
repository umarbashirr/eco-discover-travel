import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/eco_discover_logo.png"
        alt="Eco Discover Travel Logo"
        width={100}
        height={36}
      />
    </Link>
  );
};
