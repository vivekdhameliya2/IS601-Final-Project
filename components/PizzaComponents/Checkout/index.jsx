import { Button, Card } from "@mui/material";
import checkoutStyles from "../../../assets/styles/pizza.module.scss";
import arrow from "../../../assets/images/arrow.svg";
import CustomTable from "./CustomTable";
import Image from "next/image";
import CheckoutTotal from "./CheckoutTotal";
import ResponsiveTable from "./ResponsiveTable";

const Checkout = () => {
  return (
    <section
      className={`${checkoutStyles.checkout_container} custom-container `}
    >
      <div className={checkoutStyles.card_main}>
        <div className={checkoutStyles.checkout_wrapper}>
          <ResponsiveTable />
          <CustomTable />
          <h5 className={checkoutStyles.continue_shoping}>
            <Image src={arrow} alt="arrow" /> Continue Shopping
          </h5>
        </div>
        <div className={checkoutStyles.right_wrap}>
          <CheckoutTotal />
          <Button className={checkoutStyles.right_wrap_btn}>Checkout</Button>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
