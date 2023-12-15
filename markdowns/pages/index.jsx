import Head from "next/head";
import Layout from "../components/Layout";
import HeroSection from "../components/HomeComponents/HeroSection";
import CouponSection from "../components/HomeComponents/CouponSection";
import SpecialMenu from "../components/HomeComponents/SpecialMenu";
import DeliverySection from "../components/HomeComponents/DeliverySection";
import CustomAlert from "../components/CustomAlert";
import dynamic from "next/dynamic";
import { useState } from "react";
import { getDataInArray, getDataInObject } from "../lib/mdToJson";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/slices/pizza.slice";

const TestimonialSection = dynamic(() =>
  import("../components/HomeComponents/TestimonialSection")
);

const MailChimp = dynamic(() => import("../components/MailChimp"));

export async function getStaticProps() {
  const allProducts = getDataInArray("./markdowns/products");
  const homeData = getDataInObject("./markdowns/home");
  const coupons = getDataInObject("./markdowns/coupons/home-coupons");
  const layoutData = getDataInObject("./markdowns/layout");

  return {
    props: {
      homeData,
      allProducts: allProducts.slice(0, 4),
      coupons,
      layoutData
    },
  };
}

export default function Home({ homeData, coupons, allProducts, layoutData }) {
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
    <Layout layoutData={layoutData} title="Homepage">
      <Head>
        <title>
          Italian Pizza | Leading Pizza Restaurant Franchise in World
        </title>
        <meta
          name="Description"
          content="Italian Pizza is one of the top food franchises in the world, renowned for offering an impressively huge variety of scrumptious pizzas."
        ></meta>
        <link rel="canonical" href={process.env.NEXT_APP_URL}></link>
        <link
          rel="preload"
          fetchpriority="high"
          href="/images/hero-image.webp"
          as="image"
          type="image/webp"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>

        <meta property="og:url" content={process.env.NEXT_APP_URL} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Italian Pizza | 3rd Largest Pizza Chain in India"
        />
        <meta
          property="og:description"
          content="Italian Pizza is the 3rd largest Pizza chain in India. We offer a proven business model to help our franchisees craft the most delicious pizza at unbelievable prices."
        />
        <meta property="og:image" content={process.env.CARD_IMAGE} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content={process.env.DOMAIN} />
        <meta property="twitter:url" content={process.env.NEXT_APP_URL} />
        <meta
          name="twitter:title"
          content="Italian Pizza | 3rd Largest Pizza Chain in India"
        />
        <meta
          name="twitter:description"
          content="Italian Pizza is the 3rd largest Pizza chain  in India. We offer a proven business model to help our franchisees craft the most delicious pizza at unbelievable prices."
        />
        <meta name="twitter:image" content={process.env.CARD_IMAGE}></meta>
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
