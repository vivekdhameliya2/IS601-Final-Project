import layout from "../layout.module.scss";
import logo from "../../../assets/images/logo.svg";
import menuIcon from "../../../assets/images/menu.svg";
import Link from "next/link";
import Image from "next/image";
import { Header } from "antd/es/layout/layout";

import { useState } from "react";
import CustomMenu from "./CustomMenu";

const Navbar = ({ isSticky }) => {



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
        <Link className={layout.active} href="/home">
          Home
        </Link>
        <Link href="/about">About</Link>
        <Link href="/pizza">Pizza</Link>
        <Link href="/contact-us">Contact Us</Link>
      </nav>
      <CustomMenu />

    </Header>
  );
};

export default Navbar;