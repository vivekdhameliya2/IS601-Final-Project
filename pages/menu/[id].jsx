import Head from "next/head";
import Layout from "../../components/Layout";
import pizzaStyles from "../../styles/pizza.module.scss";
import PizzaDetail from "../../components/PizzaComponents/PizzaDetail";
import { getDataInObject } from "../../lib/mdToJson";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearCart,
  removeCart,
} from "../../store/slices/pizza.slice";
import { useState } from "react";
import dynamic from "next/dynamic";
import { StyledEngineProvider } from "@mui/material/styles";
import ReactGA from "react-ga4";

const CustomAlert = dynamic(() => import("../../components/CustomAlert"));
const Checkout = dynamic(() =>
  import("../../components/PizzaComponents/Checkout")
);
const DealsAndOffers = dynamic(() =>
  import("../../components/MenuComponents/DealsAndOffers")
);

export async function getStaticPaths() {
  const allProducts = getDataInObject("./markdowns/products");

  const paths = Object.keys(allProducts).map((fileName) => ({
    params: { id: fileName.replace(/\.md$/, "") },
  }));

  return {
    paths,
    fallback: false, // or true if you want to handle not-yet-generated paths
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const allProducts = getDataInObject("./markdowns/products");
  const coupons = getDataInObject("./markdowns/coupons/deals-coupons");
  const layoutData = getDataInObject("./markdowns/layout");

  return {
    props: {
      coupons: coupons.deals,
      allProducts,
      id,
      layoutData,
    },
  };
}

export default function Pizza({ coupons, allProducts, id, layoutData }) {
  const product = { ...allProducts[id], fileName: `${id}.md` };
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.pizza.cart);

  const [formData, setFormData] = useState({ qty: 0, size: 1 });
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

  const addProductToCart = () => {
    const totalPrice = +product.price * formData.size * (formData.qty || 1);
    dispatch(addToCart({ product, formData: { ...formData, totalPrice } }));
  };

  const handleChange = (name, value) => {
    if ((name == "qty" && value < 0) || value > 10) {
      return;
    }
    setFormData({ ...formData, [name]: value });
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

    ReactGA.event({
      category: "Ecommerce",
      action: "checkout_done",
      label: cartData.reduce(
        (acc, cur) => acc + "," + String(cur.uniqueId),
        ""
      ),
      value: finalTotal,
    });

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
    <Layout layoutData={layoutData} title="Pizza">
      <Head>
        <title>{allProducts[id].title}</title>
        <meta name="Description" content={allProducts[id].desc}></meta>
        <link
          rel="canonical"
          href={`${process.env.NEXT_APP_URL}/menu/${id}`}
        ></link>
        <link
          rel="preload"
          fetchpriority="high"
          href={allProducts[id].image}
          as="image"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>

        <meta
          property="og:url"
          content={`${process.env.NEXT_APP_URL}/menu/${id}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={allProducts[id].title} />
        <meta property="og:description" content={allProducts[id].desc} />
        <meta property="og:image" content={allProducts[id].image} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content={process.env.DOMAIN} />
        <meta
          property="twitter:url"
          content={`${process.env.NEXT_APP_URL}/menu/${id}`}
        />
        <meta name="twitter:title" content={allProducts[id].title} />
        <meta name="twitter:description" content={allProducts[id].desc} />
        <meta name="twitter:image" content={allProducts[id].image}></meta>
      </Head>
      <section className={pizzaStyles.hero_section}>
        <div className={pizzaStyles.overlay_image}></div>
      </section>
      <StyledEngineProvider>
        <PizzaDetail
          removeFromCart={removeFromCart}
          handleChange={handleChange}
          formData={formData}
          addProductToCart={addProductToCart}
          cartData={cartData}
          product={product}
        />
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
      </StyledEngineProvider>
      <DealsAndOffers coupons={coupons} background={"#e6f0e7 !important"} />
      <CustomAlert handleClose={handleClose} data={alert} />
    </Layout>
  );
}
