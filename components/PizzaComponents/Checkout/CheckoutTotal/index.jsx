import { Card } from "@mui/material";
import checkStyles from "./checkout.module.scss";
import CustomInput from "./CustomInput";

const CheckoutTotal = ({ subTotal, setCoupon, coupon, applyCoupon, finalTotal }) => {
  return (
    <Card className={checkStyles.wrapper} sx={{ maxWidth: 297 }}>
      <div className={checkStyles.total_wrapper}>
        <b>Order Summary</b>
        <div className={checkStyles.list_wrapper}>
          <div className={checkStyles.list_item}>
            <span>Sub Total</span>
            <p>${+subTotal.toFixed(2)}</p>
          </div>
          <div className={checkStyles.list_item}>
            <span>Discount</span>
            <p>{+finalTotal().discount.toFixed(2)}</p>
          </div>
          <div className={checkStyles.list_item}>
            <span>Shipping</span>
            <p>-</p>
          </div>
        </div>
        <hr />
        <div className={checkStyles.final_total}>
          <span>Total</span>
          <div className={checkStyles.final_total_price}>
            <b>${+finalTotal().price.toFixed(2)}</b>
            <p>(VAT included if applicable)</p>
          </div>
        </div>
        <div className={checkStyles.coupon_input}>
          <CustomInput
            applyCoupon={applyCoupon}
            coupon={coupon}
            onChange={setCoupon}
          />
        </div>
      </div>
    </Card>
  );
};

export default CheckoutTotal;
