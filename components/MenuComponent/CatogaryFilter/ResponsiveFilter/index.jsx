import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import menuStyles from "../../../../assets/styles/menu.module.scss";
import burger from "../../../../assets/images/burger-white.svg";
import slice from "../../../../assets/images/slice.svg";
import beverages from "../../../../assets/images/beverages.svg";
import salads from "../../../../assets/images/salads.svg";
import fries from "../../../../assets/images/fries.svg";
import Image from "next/image";

const ResponsiveFilter = ({ anchorEl, open, handleClose }) => {
  return (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
    >
      <MenuItem onClick={handleClose}>
        <div className={menuStyles.filter_box}>
          <Image src={slice} alt="filter-icon" />
          <span>Pizza</span>
        </div>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <div className={menuStyles.filter_box}>
          <Image src={burger} alt="filter-icon" />
          <span>Burgeer</span>
        </div>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <div className={menuStyles.filter_box}>
          <Image src={fries} alt="filter-icon" />
          <span>Fries</span>
        </div>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <div className={menuStyles.filter_box}>
          <Image src={salads} alt="filter-icon" />
          <span>Salads</span>
        </div>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <div className={menuStyles.filter_box}>
          <Image src={beverages} alt="filter-icon" />
          <span>Beverages</span>
        </div>
      </MenuItem>
    </Menu>
  );
};

export default ResponsiveFilter;