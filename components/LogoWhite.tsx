import Image from "next/image";
import Link from "next/link";
import React from "react";

const LogoWhite = () => {
  return (
    <div className="logoWrapper">
      <Link href="/">
        <Image src="/img/logoWhite.png" fill alt="DiveMix" />
      </Link>;
    </div>
  );
};

export default LogoWhite;
