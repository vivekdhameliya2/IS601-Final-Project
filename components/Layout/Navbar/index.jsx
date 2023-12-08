"use client";
import layout from "../layout.module.scss";
import logo from "../../../assets/images/logo.svg";
import Link from "next/link";
import Image from "next/image";
import { Header } from "antd/es/layout/layout";
import CustomMenu from "./CustomMenu";
import { usePathname } from "next/navigation";

const Navbar = ({ isSticky }) => {
  const pathName = usePathname();

  return (
    <Header
      className={`${
        isSticky ? layout.sticky_header : layout.header
      } custom-container`}
    >
      <div className={layout.logo}>
        <Image alt="Logo" src={logo} />
      </div>
      <nav className={layout.navigation}>
        <Link className={pathName === "/" && layout.active} href="/">
          Home
        </Link>
        <Link className={pathName === "/about" && layout.active} href="/about">
          About
        </Link>
        <Link className={pathName === "/menu" && layout.active} href="/menu">
          Pizza
        </Link>
        <Link
          className={pathName === "/contact" && layout.active}
          href="/contact"
        >
          Contact Us
        </Link>
      </nav>
      <CustomMenu />
    </Header>
  );
};

export default Navbar;