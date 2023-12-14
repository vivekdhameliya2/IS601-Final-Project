import tableStyle from "../CustomTable/table.module.scss";
import Image from "next/image";
import NumberInput from "../../../NumberInput";

const sizes = {
  1: "Regular",
  1.5: "Medium",
  2: "Large",
};

const ResponsiveTable = ({ removeFromCart, handleChange, cartData }) => {
  return (
    <div className={tableStyle.responsiveTable}>
      {cartData.map((data, index) => {
        const { product } = data;
        return (
          <div key={index} className={tableStyle.responsiveTable_item}>
            <div className={tableStyle.product_wrapper}>
              <Image src={product.image} width={64} height={64} alt="pizza" />
              <div className={tableStyle.product_content}>
                <h5>{product.title}</h5>
                <p>
                  size: <span>{sizes[data.size]}</span>
                </p>
              </div>
            </div>
            <NumberInput handleChange={handleChange} formData={data} />
            <h5>${(+data.totalPrice).toFixed(2)}</h5>
            <Image
              width={20}
              height={20}
              className="cursor_pointer"
              onClick={() => removeFromCart(data.uniqueId)}
              src={"/images/ic_trash.svg"}
              alt="delete"
            />
          </div>
        );
      })}
    </div>
  );
};

export default ResponsiveTable;
