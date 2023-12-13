import { Button, Card } from "@mui/material";
import checkoutStyles from "../../../assets/styles/pizza.module.scss";
import CustomTable from "./CustomTable";
import Image from "next/image";
import CheckoutTotal from "./CheckoutTotal";
import ResponsiveTable from "./ResponsiveTable";
import { useDispatch } from "react-redux";
import { updateCart } from "../../../store/slices/pizza.slice";
import { useRouter } from "next/router";
import Link from "next/link";

const Checkout = ({ cartData, removeFromCart, setCoupon, coupon, applyCoupon, subTotal, finalTotal, placeOrder }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleChange = (name, value, product) => {
    if ((name == "qty" && value < 1) || value > 10) {
      return;
    }
    dispatch(updateCart({ name, value, product }));
  };

  return (
    <section
      className={`${checkoutStyles.checkout_container} custom-container `}
    >
      <div className={checkoutStyles.card_main}>
        <div className={checkoutStyles.checkout_wrapper}>
          <ResponsiveTable
            removeFromCart={removeFromCart}
            handleChange={handleChange}
            cartData={cartData}
          />
          <CustomTable
            removeFromCart={removeFromCart}
            handleChange={handleChange}
            cartData={cartData}
          />
          <Link href="/menu" className={checkoutStyles.continue_shoping}>
            <Image width={20} height={20} src={"/images/arrow.svg"} alt="arrow" /> Continue Shopping
          </Link>
        </div>
        <div className={checkoutStyles.right_wrap}>
          <CheckoutTotal finalTotal={finalTotal} applyCoupon={applyCoupon} coupon={coupon} setCoupon={setCoupon} subTotal={subTotal} cartData={cartData} removeFromCart={removeFromCart} />
          <Button disabled={!subTotal} onClick={() => placeOrder()} className={checkoutStyles.right_wrap_btn}>Checkout</Button>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
