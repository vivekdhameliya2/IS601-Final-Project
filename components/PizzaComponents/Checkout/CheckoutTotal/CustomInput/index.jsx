import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import { Button } from "@mui/material";

export default function CustomInput({ onChange, coupon, applyCoupon }) {
  return (
    <Paper
      className="custom_input"
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        maxWidth: 268,
      }}
    >
      <InputBase
        aria-labelledby="coupon"
        onChange={(e) => onChange({ ...coupon, coupon: e.target.value })}
        sx={{ ml: 1, flex: 1, border: "none" }}
        placeholder="Discount codes / Gifts"
        value={coupon.coupon}
        inputProps={{ "aria-label": "Discount codes / Gifts" }}
      />
      <Button onClick={() => applyCoupon()} >Apply</Button>
    </Paper>
  );
}
