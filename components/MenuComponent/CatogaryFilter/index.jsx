import Image from "next/image";
import menuStyles from "../../../assets/styles/menu.module.scss";
import burger from "../../../assets/images/burger-white.svg";
import slice from "../../../assets/images/slice.svg";
import beverages from "../../../assets/images/beverages.svg";
import salads from "../../../assets/images/salads.svg";
import fries from "../../../assets/images/fries.svg";
import cartIcon from "../../../assets/images/cartIcon.svg";
import filterIcon from "../../../assets/images/filter.svg";
import Button from "@mui/material/Button";

import { useState } from "react";
import ResponsiveFilter from "./ResponsiveFilter";

const CategoryFilter = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <section className={`${menuStyles.menu_container} custom-container`}>
      <div className={menuStyles.filter_container}>
        <div className={menuStyles.filter_wrapper}>
          <div className={menuStyles.filter_box}>
            <Image src={slice} alt="filter-icon" />
            <span>Pizza</span>
          </div>
          <div className={menuStyles.filter_box}>
            <Image src={burger} alt="filter-icon" />
            <span>Burgeer</span>
          </div>
          <div className={menuStyles.filter_box}>
            <Image src={fries} alt="filter-icon" />
            <span>Fries</span>
          </div>
          <div className={menuStyles.filter_box}>
            <Image src={salads} alt="filter-icon" />
            <span>Salads</span>
          </div>
          <div className={menuStyles.filter_box}>
            <Image src={beverages} alt="filter-icon" />
            <span>Beverages</span>
          </div>
        </div>
        <div className={menuStyles.responsive_filter}>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <Image src={filterIcon} alt="filter_icon" />
          </Button>
        </div>
        <ResponsiveFilter
          anchorEl={anchorEl}
          open={open}
          handleClose={handleClose}
        />
        <div className={menuStyles.cart_icon}>
          <Image src={cartIcon} alt="cart_icon" />
          <div className={menuStyles.badge}>5</div>
        </div>
      </div>
    </section>
  );
};

export default CategoryFilter;