import { Button } from "@mui/material";
import { Input } from "@mui/base";
import inputStyles from "./numberInput.module.scss";
import Image from "next/image";
import plus from "../../assets/images/ic_plus.svg";
import minus from "../../assets/images/ic_minus.svg";

const NumberInput = ({ handleChange, formData }) => {
  return (
    <div className={inputStyles.number_wrapper}>
      <Button
        onClick={() => handleChange("qty", formData.qty - 1, formData)}
        sx={{ maxWidth: 15 }}
        className={inputStyles.minus}
      >
        <Image alt="minus" src={minus} />
      </Button>
      <Input  type="number" value={formData?.qty} />
      <Button
        onClick={() => handleChange("qty", formData.qty + 1, formData)}
        sx={{ maxWidth: 15 }}
        className={inputStyles.plus}
      >
        <Image alt="plus" src={plus} />
      </Button>
    </div>
  );
};

export default NumberInput;
