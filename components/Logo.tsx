import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div className="logoWrapper">
      <Link href="/">
        <Image src="/img/logo.png" fill alt="DiveMix" />
      </Link>;
    </div>
  );
};

export default Logo;
