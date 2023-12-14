import Head from "next/head";
import Layout from "../../components/Layout";
import pizzaStyles from "../../styles/pizza.module.scss";
import PizzaDetail from "../../components/PizzaComponents/PizzaDetail";
import DealsAndOffers from "../../components/MenuComponents/DealsAndOffers";
import Checkout from "../../components/PizzaComponents/Checkout";
import { getDataInObject } from "../../lib/mdToJson";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearCart,
  removeCart,
} from "../../store/slices/pizza.slice";
import { useState } from "react";
import CustomAlert from "../../components/CustomAlert";

export async function getStaticProps({ params }) {
  const coupons = getDataInObject("./markdowns/coupons/deals-coupons");

  return {
    props: {
      coupons: coupons.deals,
    },
  };
}

export default function Pizza({ coupons }) {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.pizza.cart);
  const [coupon, setCoupon] = useState({
    coupon: "",
    applied: false,
    discount: 0,
  });
  const [alert, setAlert] = useState({ open: false, message: "", type: "" });

  const subTotal = cartData.reduce((acc, cur) => {
    return +acc + +cur.totalPrice;
  }, 0);

  const finalTotal = () => {
    const discount = coupon && coupon.discount ? coupon.discount : 0;

    // Calculate the actual discount applied
    const actualDiscount = Math.min(discount, subTotal);

    // Calculate the final price after applying the discount
    const price = subTotal - actualDiscount;

    return { price, discount: actualDiscount };
  };

  const removeFromCart = (id) => {
    dispatch(removeCart({ id }));
  };

  const handleClose = () => {
    setAlert({ open: false, message: "", type: "" });
  };

  const applyCoupon = () => {
    handleClose();

    if (!subTotal) {
      setAlert({
        open: true,
        message: "Please add something in cart to apply a coupon",
        type: "error",
      });
      return;
    }

    if (!coupon) {
      setAlert({
        open: true,
        message: "Please add a coupon first",
        type: "error",
      });
      return;
    }

    const isCoupon = coupons.coupons.filter(
      (data) =>
        String(data.code).toLowerCase() === String(coupon.coupon).toLowerCase()
    )[0];
    if (isCoupon) {
      setTimeout(() => {
        setAlert({
          open: true,
          message: "Coupon applied successfully",
          type: "success",
        });
      });

      setCoupon({ coupon: "", applied: true, discount: isCoupon.discount });
    } else {
      setTimeout(() => {
        setAlert({
          open: true,
          message: "Please add a valid coupon",
          type: "error",
        });
      });
    }
  };

  const placeOrder = () => {
    if (subTotal <= 0) {
      return;
    }
    dispatch(clearCart());
    handleClose();
    setTimeout(() => {
      setAlert({
        open: true,
        message: "Your order is placed successfully",
        type: "success",
      });
    });
  };

  return (
    <Layout title="Cart">
      <Head>
        <title>Cart</title>
        <meta
          name="Description"
          content="Italian Pizza is one of the top food franchises in the world, renowned for offering an impressively huge variety of scrumptious pizzas."
        ></meta>
        <link rel="canonical" href={`${process.env.NEXT_APP_URL}/menu`}></link>
        <link
          rel="preload"
          fetchpriority="high"
          href="/images/about-hero.webp"
          as="image"
          type="image/webp"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>

        <meta property="og:url" content={`${process.env.NEXT_APP_URL}/menu`} />
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
        <meta
          property="twitter:url"
          content={`${process.env.NEXT_APP_URL}/menu`}
        />
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
      <section className={pizzaStyles.hero_section}>
        <div className={pizzaStyles.overlay_image}></div>
      </section>
      <Checkout
        finalTotal={finalTotal}
        applyCoupon={applyCoupon}
        coupon={coupon}
        setCoupon={setCoupon}
        removeFromCart={removeFromCart}
        cartData={cartData}
        subTotal={subTotal}
        placeOrder={placeOrder}
      />
      <DealsAndOffers coupons={coupons} background={"#e6f0e7 !important"} />
      <CustomAlert handleClose={handleClose} data={alert} />
    </Layout>
  );
}
