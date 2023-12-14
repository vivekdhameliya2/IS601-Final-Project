import Head from "next/head";
import Layout from "../components/Layout";
import HeroSection from "../components/HomeComponents/HeroSection";
import CouponSection from "../components/HomeComponents/CouponSection";
import SpecialMenu from "../components/HomeComponents/SpecialMenu";
import TestimonialSection from "../components/HomeComponents/TestimonialSection";
import DeliverySection from "../components/HomeComponents/DeliverySection";
import { getDataInArray, getDataInObject } from "../lib/mdToJson";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/slices/pizza.slice";
import MailChimp from "../components/MailChimp";
import { useState } from "react";
import CustomAlert from "../components/CustomAlert";

export async function getStaticProps() {
  const allProducts = getDataInArray("./markdowns/products");
  const homeData = getDataInObject("./markdowns/home");
  const coupons = getDataInObject("./markdowns/coupons/home-coupons");

  return {
    props: {
      homeData,
      allProducts: allProducts.slice(0, 4),
      coupons,
    },
  };
}

export default function Home({ homeData, coupons, allProducts }) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const [alert, setAlert] = useState({ open: false, message: "", type: "" });
  const cartData = useSelector((state) => state.pizza.cart);

  const addProductToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    setAlert({
      open: true,
      message:
        "Thanks for signing up. You will be notified for our latest offers and deals.",
      type: "success",
    });
    setOpen(false);
  };

  const alertClose = () => {
    setAlert({ open: false, message: "", type: "" });
  };

  const handleError = (message) => {
    setAlert({ open: true, message: message, type: "error" });
  };

  return (
    <Layout title="Homepage">
      <Head>
        <title>Homepage</title>
      </Head>
      <HeroSection handleOpen={handleOpen} data={homeData["hero-section"]} />
      <CouponSection coupons={coupons} />
      <SpecialMenu
        cartData={cartData}
        addProductToCart={addProductToCart}
        allProducts={allProducts}
        data={homeData["menu-section"]}
      />
      <TestimonialSection data={homeData["testimonial-section"]} />
      <DeliverySection data={homeData["delivery-section"]} />

      {alert.open && <CustomAlert data={alert} handleClose={alertClose} />}
      {open && (
        <MailChimp
          open={open}
          handleSubmit={handleSubmit}
          handleClose={handleClose}
          handleError={handleError}
        />
      )}
    </Layout>
  );
}
