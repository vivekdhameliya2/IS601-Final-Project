"use client";
import layout from "../layout.module.scss";
import Link from "next/link";
import Image from "next/image";
import CustomMenu from "./CustomMenu";
import { usePathname } from "next/navigation";
import { useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const ResponsiveMenu = dynamic(() => import("./ResponsiveMenu"));

const menuData = [
  {
    title: "Home",
    path: "/"
  },
  {
    title: "About",
    path: "/about",
    
  },
  {
    title: "Menu",
    path: "/menu",
 
  },
  {
    title: "contact us",
    path: "/contact",
  },
];

const Navbar = ({ isSticky }) => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const pathName = usePathname();

  const handleOpenChange = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header
      className={`${
        isSticky ? layout.sticky_header : layout.header
      } custom-container`}
    >
      <div onClick={() => router.push('/')} className={layout.logo}>
        <Image alt="Logo" src={"/logo/logo.svg"} width={120} height={112} />
      </div>
      <nav className={layout.navigation}>
        <Link className={pathName === "/" ? layout.active : ""} href="/">
          Home
        </Link>
        <Link
          className={pathName === "/about" ? layout.active : ""}
          href="/about"
        >
          About
        </Link>
        <Link
          className={pathName === "/menu" ? layout.active : ""}
          href="/menu"
        >
          Menu
        </Link>
        <Link
          className={pathName === "/contact" ? layout.active : ""}
          href="/contact"
        >
          Contact Us
        </Link>
      </nav>
      <CustomMenu handleOpenChange={handleOpenChange} />
      <ResponsiveMenu
        pathName={pathName}
        anchorEl={anchorEl}
        open={open}
        handleClose={handleClose}
        menuData={menuData}
      />
    </header>
  );
};

export default Navbar;
