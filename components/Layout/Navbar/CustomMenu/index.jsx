import { Popover } from "antd";
import { useState } from "react";
import layout from '../../layout.module.scss'
import Image from "next/image";
import menuIcon from "../../../../assets/images/menu.svg";
import Link from "next/link";

const MenuList = () => {
 return (
  <div className={layout.menu_wrapper} >
    <Link href="/" className={layout.menu_item}>
      Home
    </Link>
    <Link href="/" className={layout.menu_item}>
      About
    </Link>
    <Link href="/" className={layout.menu_item}>
      Pizza
    </Link>
    <Link href="/" className={layout.menu_item}>
      Contact Us
    </Link>
  </div>
 ) 
}

const CustomMenu = () => {
  const [open, setOpen] = useState(false);

  const handleOpenChange = () => {
    setOpen(!open);
  }

  return (
    <Popover
      content={<MenuList />}
      title={null}
      trigger="click"
      open={open}
      onOpenChange={handleOpenChange}
    >
      <div className={layout.mobile_menu}>
        <Image src={menuIcon} alt="menuIcon" />
      </div>
    </Popover>
  );
};

export default CustomMenu;