import pizzaStyles from "../../../styles/pizza.module.scss";
import Image from "next/image";
import { Button, Rating } from "@mui/material";
import NumberInput from "../../NumberInput";
import SizeSelect from "./SizeSelect";

const PizzaDetail = ({
  product,
  cartData,
  addProductToCart,
  handleChange,
  formData,
  removeFromCart,
}) => {
  const isInCart = cartData.filter(
    (item) => item.uniqueId === product.fileName
  )[0];

  const totalPrice = +product.price * formData.size * (formData.qty || 1);

  return (
    <section className={`${pizzaStyles.detail_container} custom-container`}>
      <div className={pizzaStyles.image_container}>
        <Image
          priority={true}
          loading="eager"
          src={product.image}
          height={420}
          width={420}
          alt="pizza-image"
        />
      </div>
      <div className={pizzaStyles.detail_content}>
        <div className={pizzaStyles.offer_wrap}>
          <div className={pizzaStyles.offer_chip}>OFFER</div>
          <Image
            width={20}
            height={20}
            src={product.veg ? "/images/veg.svg" : "/images/non-veg.svg"}
            alt="veg"
          />
        </div>
        <h5>{product.newArrival && "New Arrival"}</h5>
        <h2 data-testid="pizza-section-title">{product.title}</h2>
        <p data-testid="pizza-section-desc">{product.desc}</p>
        <div className={pizzaStyles.rating_wrapper}>
          <Rating value={product.rating} />
          <p>{`(${product.totalReviews} reviews)`}</p>
        </div>
        <div className={pizzaStyles.price_wrapper}>
          <span>${+product.beforePrice.toFixed(2)}</span>
          <span data-testid="pizza-section-price">
            {" "}
            ${+totalPrice.toFixed(2)}
          </span>
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
          <Button
            onClick={() => removeFromCart(product.fileName)}
            className={pizzaStyles.cart_button}
          >
            <Image
              height={24}
              width={24}
              src={"/images/cartIconV2.svg"}
              alt="cartIcon"
            />
            <span>Remove from cart</span>
          </Button>
        ) : (
          <Button
            data-testid="pizza-section-button"
            onClick={() => addProductToCart()}
            className={pizzaStyles.cart_button}
          >
            <Image
              height={24}
              width={24}
              src={"/images/cartIconV2.svg"}
              alt="cartIcon"
            />
            <span>Add to Cart</span>
          </Button>
        )}
      </div>
    </section>
  );
};

export default PizzaDetail;