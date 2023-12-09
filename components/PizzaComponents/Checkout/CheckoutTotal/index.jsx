import { Card, Input } from "@mui/material";
import checkStyles from "./checkout.module.scss";
import CustomInput from "./CustomInput";

const CheckoutTotal = () => {
  return (
    <Card className={checkStyles.wrapper} sx={{ maxWidth: 297 }}>
      <div className={checkStyles.total_wrapper} >
        <h5>Order Summary</h5>
        <div className={checkStyles.list_wrapper}>
          <div className={checkStyles.list_item}>
            <span>Sub Total</span>
            <p>$5.79</p>
          </div>
          <div className={checkStyles.list_item}>
            <span>Discount</span>
            <p>-</p>
          </div>
          <div className={checkStyles.list_item}>
            <span>Sub Total</span>
            <p>-</p>
          </div>
        </div>
        <hr />
        <div className={checkStyles.final_total}>
          <span>Total</span>
          <div className={checkStyles.final_total_price} >
            <b>$62.02</b>
            <p>(VAT included if applicable)</p>
          </div>
        </div>
        <div className={checkStyles.coupon_input}>
          <CustomInput />
        </div>
      </div>

    </Card>
  );
};

export default CheckoutTotal;

