import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import responsiveStyles from "../../layout.module.scss";
import Image from "next/image";
import Link from "next/link";

const ResponsiveMenu = ({
  anchorEl,
  open,
  handleClose,
  menuData,
  pathName
}) => {
  return (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      className={responsiveStyles.responsive_menu}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
    >
      {menuData.map((menuItem) => {
        return (
          <MenuItem
            className={pathName === menuItem.path ? responsiveStyles.menu_item_active : responsiveStyles.menu_item}
            key={menuItem.type}
            onClick={() => handleClose(menuItem.type)}
          >
            <Link href={menuItem.path} >
              <span>{menuItem.title}</span>
            </Link>
          </MenuItem>
        );
      })}
    </Menu>
  );
};

export default ResponsiveMenu;
