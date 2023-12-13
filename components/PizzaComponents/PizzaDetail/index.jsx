import pizzaStyles from "../../../assets/styles/pizza.module.scss";
import veg from "../../../assets/images/veg.svg";
import nonVeg from "../../../assets/images/non-veg.svg";
import Image from "next/image";
import {
  Button,
  Rating,
} from "@mui/material";
import cartIcon from "../../../assets/images/cartIconV2.svg";
import NumberInput from "../../NumberInput";
import SizeSelect from "./SizeSelect";

const PizzaDetail = ({ product, cartData, addProductToCart, handleChange, formData, removeFromCart }) => {
  const isInCart = cartData.filter(
    (item) => item.uniqueId === product.fileName
  )[0];

  const totalPrice = (+product.price * formData.size) * (formData.qty || 1);

  return (
    <section className={`${pizzaStyles.detail_container} custom-container`}>
      <div className={pizzaStyles.image_container}>
        <Image src={product.image} height={420} width={420} alt="pizza-image" />
      </div>
      <div className={pizzaStyles.detail_content}>
        <div className={pizzaStyles.offer_wrap}>
          <div className={pizzaStyles.offer_chip}>OFFER</div>
          <Image src={product.veg ? veg : nonVeg} alt="veg" />
        </div>
        <h5>{product.newArrival && "New Arrival"}</h5>
        <h2>{product.title}</h2>
        <p>{product.desc}</p>
        <div className={pizzaStyles.rating_wrapper}>
          <Rating value={product.rating} />
          <p>{`(${product.totalReviews} reviews)`}</p>
        </div>
        <div className={pizzaStyles.price_wrapper}>
          <h6>${+product.beforePrice.toFixed(2)}</h6>
          <h5> ${+totalPrice.toFixed(2)}</h5>
        </div>
        <hr />
        {!isInCart && (
          <>
            <div className={pizzaStyles.cartForm}>
              {product.type === "pizza" && (
                <SizeSelect formData={formData} handleChange={handleChange} />
              )}
             
              <div className={pizzaStyles.form_item}>
                <label>Quantity</label>
                <NumberInput formData={formData} handleChange={handleChange} />
              </div>
            </div>
            <hr />
          </>
        )}
        {isInCart ? (
          <Button onClick={() => removeFromCart(product.fileName)}  className={pizzaStyles.cart_button}>
            <Image src={cartIcon} alt="cartIcon" />
            <span>Remove from cart</span>
          </Button>
        ) : (
          <Button
            onClick={() => addProductToCart()}
            className={pizzaStyles.cart_button}
          >
            <Image src={cartIcon} alt="cartIcon" />
            <span>Add to Cart</span>
          </Button>
        )}
      </div>
    </section>
  );
};

export default PizzaDetail;
