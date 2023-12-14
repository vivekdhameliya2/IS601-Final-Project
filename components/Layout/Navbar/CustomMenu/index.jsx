import { useState } from "react";
import layout from "../../layout.module.scss";
import Image from "next/image";
import Link from "next/link";

const MenuList = () => {
  return (
    <div className={layout.menu_wrapper}>
      <Link href="/" className={layout.menu_item}>
        Home
      </Link>
      <Link href="/about" className={layout.menu_item}>
        About
      </Link>
      <Link href="/menu" className={layout.menu_item}>
        Pizza
      </Link>
      <Link href="/contact" className={layout.menu_item}>
        Contact Us
      </Link>
    </div>
  );
};

const CustomMenu = ({handleOpenChange}) => {
   return (
    <div onClick={(e) => handleOpenChange(e)} className={layout.mobile_menu}>
      <Image width={40} height={40} src={"/images/menu.svg"} alt="menuIcon" />
    </div>
  );
};

export default CustomMenu;
