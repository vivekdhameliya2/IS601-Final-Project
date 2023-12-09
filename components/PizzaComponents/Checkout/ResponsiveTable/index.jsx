import tableStyle from "../CustomTable/table.module.scss";
import largePizza from "../../../../assets/images/large-pizza.png";
import trash from "../../../../assets/images/ic_trash.svg";
import Image from "next/image";
import NumberInput from "../../../NumberInput";

const ResponsiveTable = () => {
  return (
    <div className={tableStyle.responsiveTable}>
      <div className={tableStyle.responsiveTable_item}>
        <div className={tableStyle.product_wrapper}>
          <Image src={largePizza} alt="pizza" />
          <div className={tableStyle.product_content}>
            <h5>Korma Special Pizza</h5>
            <p>
              size: <span>Medium</span>
            </p>
          </div>
        </div>
        <NumberInput />
        <h5>$6.97</h5>
        <Image src={trash} alt="delete" />
      </div>
      <div className={tableStyle.responsiveTable_item}>
        <div className={tableStyle.product_wrapper}>
          <Image src={largePizza} alt="pizza" />
          <div className={tableStyle.product_content}>
            <h5>Korma Special Pizza</h5>
            <p>
              size: <span>Medium</span>
            </p>
          </div>
        </div>
        <NumberInput />
        <h5>$6.97</h5>
        <Image src={trash} alt="delete" />
      </div>
    </div>
  );
};

export default ResponsiveTable;
