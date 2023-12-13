import Head from "next/head";
import Layout from "../../components/Layout";
import pizzaStyles from "../../assets/styles/pizza.module.scss";
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
  const product = allProducts[id];

  return {
    props: {
      coupons: coupons.deals,
      product: { ...product, fileName: `${id}.md` },
    },
  };
}

export default function Pizza({ coupons, product }) {
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
      })

      setCoupon({ coupon: "", applied: true, discount: isCoupon.discount });
    } else {
      setTimeout(() => {
        setAlert({
          open: true,
          message: "Please add a valid coupon",
          type: "error",
        });
      })
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
    })
  };

  return (
    <Layout title="Pizza" >
      <Head>
        <title>Pizza</title>
      </Head>
      <section className={pizzaStyles.hero_section}>
        <div className={pizzaStyles.overlay_image}></div>
      </section>
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
      <DealsAndOffers coupons={coupons} background={"#e6f0e7 !important"} />
      <CustomAlert handleClose={handleClose} data={alert} />
    </Layout>
  );
}
