import { Button } from "@mui/material";
import { Input } from "@mui/base";
import inputStyles from "./numberInput.module.scss";
import Image from "next/image";

const NumberInput = ({ handleChange, formData }) => {
  return (
    <div className={inputStyles.number_wrapper}>
      <Button
        onClick={() => handleChange("qty", formData.qty - 1, formData)}
        sx={{ maxWidth: 15 }}
        className={inputStyles.minus}
      >
        <Image width={18} height={18} alt="minus" src={"/images/ic_minus.svg"} />
      </Button>
      <Input aria-labelledby="quantity"  type="number" value={formData?.qty} />
      <Button
        onClick={() => handleChange("qty", formData.qty + 1, formData)}
        sx={{ maxWidth: 15 }}
        className={inputStyles.plus}
      >
        <Image width={18} height={18} alt="plus" src={"/images/ic_plus.svg"} />
      </Button>
    </div>
  );
};

export default NumberInput;
