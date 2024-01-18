"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const pathname = usePathname();
  return (
    <nav className="h-100">
      <div className="navigation">
        <Link
          href="/"
          className={`navItem navLink ${pathname == "/" ? "active" : ""}`}
        >
          Home
        </Link>
        <Link
          href="/products"
          className={`navItem navLink ${
            pathname == "/products" ? "active" : ""
          }`}
        >
          Products
        </Link>
        <Link
          href="/services"
          className={`navItem navLink ${
            pathname == "/services" ? "active" : ""
          }`}
        >
          Services
        </Link>
        <Link
          href="/applications"
          className={`navItem navLink ${
            pathname == "/applications" ? "active" : ""
          }`}
        >
          Applications
        </Link>
        <Link
          href="/news"
          className={`navItem navLink ${pathname == "/news" ? "active" : ""}`}
        >
          News
        </Link>
        <Link
          href="/contact"
          className={`navItem navLink ${
            pathname == "/contact" ? "active" : ""
          }`}
        >
          Contact
        </Link>
        <Link
          href="/about"
          className={`navItem navLink ${pathname == "/about" ? "active" : ""}`}
        >
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
