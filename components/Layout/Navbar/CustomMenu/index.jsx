import { useState } from "react";
import layout from "../../layout.module.scss";
import Image from "next/image";
import menuIcon from "../../../../assets/images/menu.svg";
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

const CustomMenu = () => {
  const [open, setOpen] = useState(false);

  const handleOpenChange = () => {
    setOpen(!open);
  };

  return (
    <div className={layout.mobile_menu}>
      <Image src={menuIcon} alt="menuIcon" />
    </div>
  );
};

export default CustomMenu;
