import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import menuStyles from "../../../../assets/styles/menu.module.scss";
import burger from "../../../../assets/images/burger-white.svg";
import slice from "../../../../assets/images/slice.svg";
import beverages from "../../../../assets/images/beverages.svg";
import salads from "../../../../assets/images/salads.svg";
import fries from "../../../../assets/images/fries.svg";
import Image from "next/image";

const ResponsiveFilter = ({
  anchorEl,
  open,
  handleClose,
  catData,
  selectedCategory,
}) => {
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
      {catData.map((category) => {
        return (
          <MenuItem
            key={category.type}
            onClick={() => handleClose(category.type)}
          >
            <div
              className={`${menuStyles.filter_box} ${
                selectedCategory === category.type
                  ? menuStyles.filter_box_active
                  : ""
              } `}
            >
              <Image src={category.icon} alt="filter-icon" />
              <span>{category.title}</span>
            </div>
          </MenuItem>
        );
      })}
    </Menu>
  );
};

export default ResponsiveFilter;
