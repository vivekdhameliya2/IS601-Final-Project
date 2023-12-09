import { Button } from "@mui/material";
import { Input } from "@mui/base";
import inputStyles from "./numberInput.module.scss";
import Image from "next/image";
import plus from "../../assets/images/ic_plus.svg";
import minus from "../../assets/images/ic_minus.svg";

const NumberInput = ({ onChange, value=0 }) => {
  return (
    <div className={inputStyles.number_wrapper}>
      <Button
        onClick={() => onChange("minus")}
        sx={{ maxWidth: 15 }}
        className={inputStyles.minus}
      >
        <Image src={minus} />
      </Button>
      <Input type="number" value={value} />
      <Button
        onClick={() => onChange("plus")}
        sx={{ maxWidth: 15 }}
        className={inputStyles.plus}
      >
        <Image src={plus} />
      </Button>
    </div>
  );
};

export default NumberInput;
