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
import CustomCard from "../../CustomCard";
import { Pagination } from "@mui/material";
import Link from "next/link";

const catData = [
  {
    type: "pizza",
    title: "Pizza",
    icon: slice,
  },
  {
    type: "burger",
    title: "Burger",
    icon: burger,
  },
  {
    type: "fries",
    title: "Fries",
    icon: fries,
  },
  {
    type: "dessert",
    title: "Dessert",
    icon: salads,
  },
  {
    type: "beverages",
    title: "Beverages",
    icon: beverages,
  },
];

const CategoryFilter = ({ allProducts, addProductToCart, cartData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const itemsPerPage = 5;
  const getTotalPages = () =>
    Math.ceil(getFilteredData().length / itemsPerPage);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const getPaginatedData = () => {
    const filteredData = getFilteredData();
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredData.slice(startIndex, endIndex);
  };

  const getFilteredData = () => {
    if (selectedCategory) {
      return allProducts.filter((item) => item.type === selectedCategory);
    }
    return allProducts;
  };

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const handleClose = (category) => {
    setAnchorEl(null);
    if (category === selectedCategory) {
      setSelectedCategory(null);
      setCurrentPage(1);
      return;
    }
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleCategoryFilter = (category) => {
    if (category === selectedCategory) {
      setSelectedCategory(null);
      setCurrentPage(1);
      return;
    }
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <section className={`${menuStyles.menu_container} custom-container`}>
      <div className={menuStyles.filter_container}>
        <div className={menuStyles.filter_wrapper}>
          {catData.map((category) => {
            return (
              <div
                key={category.type}
                onClick={() => handleCategoryFilter(category.type)}
                className={`${menuStyles.filter_box} ${
                  selectedCategory === category.type
                    ? menuStyles.filter_box_active
                    : ""
                } `}
              >
                <Image src={category.icon} alt="filter-icon" />
                <span>{category.title}</span>
              </div>
            );
          })}
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
          catData={catData}
          selectedCategory={selectedCategory}
        />
        <Link href="/cart" className={menuStyles.cart_icon}>
          <Image src={cartIcon} alt="cart_icon" />
          {!!cartData.length && <div className={menuStyles.badge}>{cartData.length}</div>}
        </Link>
      </div>
      <div className={menuStyles.list_wrapper}>
        {getPaginatedData().map((data, index) => {
          return (
            <CustomCard
            key={index}
              isInCart={
                cartData.filter((item) => item.uniqueId === data.fileName)[0]
              }
              addProductToCart={addProductToCart}
              data={data}
            />
          );
        })}
      </div>
      <div className={menuStyles.pagination_wrapper}>
        {!!getPaginatedData().length && (
          <Pagination
            count={getTotalPages()}
            page={currentPage}
            onChange={handlePageChange}
          />
        )}
      </div>
    </section>
  );
};

export default CategoryFilter;
