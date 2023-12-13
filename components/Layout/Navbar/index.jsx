"use client";
import layout from "../layout.module.scss";
import Link from "next/link";
import Image from "next/image";
import CustomMenu from "./CustomMenu";
import { usePathname } from "next/navigation";

const Navbar = ({ isSticky }) => {
  const pathName = usePathname();

  return (
    <header
      className={`${
        isSticky ? layout.sticky_header : layout.header
      } custom-container`}
    >
      <div className={layout.logo}>
        <Image alt="Logo" src={"/logo/logo.svg"} width={120} height={112} />
      </div>
      <nav className={layout.navigation}>
        <Link className={pathName === "/" ? layout.active : ""} href="/">
          Home
        </Link>
        <Link className={pathName === "/about" ? layout.active : ""} href="/about">
          About
        </Link>
        <Link className={pathName === "/menu" ? layout.active : ""} href="/menu">
          Pizza
        </Link>
        <Link
          className={pathName === "/contact" ? layout.active : ""}
          href="/contact"
        >
          Contact Us
        </Link>
      </nav>
      <CustomMenu />
    </header>
  );
};

export default Navbar;
