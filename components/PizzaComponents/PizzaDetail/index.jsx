import pizzaStyles from "../../../assets/styles/pizza.module.scss";
import largePizza from "../../../assets/images/large-pizza.png";
import veg from "../../../assets/images/veg.svg";
import nonVeg from "../../../assets/images/non-veg.svg";
import Image from "next/image";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Rating,
  Select,
} from "@mui/material";
import cartIcon from "../../../assets/images/cartIconV2.svg";
import NumberInput from "../../NumberInput";

const PizzaDetail = ({ product, cartData, addProductToCart }) => {
  const isInCart = cartData.filter(
    (item) => item.uniqueId === product.fileName
  )[0];

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
          <h5> ${+product.price.toFixed(2)}</h5>
        </div>
        <hr />
        <div className={pizzaStyles.cartForm}>
          <div className={pizzaStyles.form_item}>
            <label>Size</label>
            <FormControl sx={{ minWidth: 180, maxWidth: 180 }} size="small">
              <InputLabel id="demo-select-small-label">
                Choose your size
              </InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                label="Choose your size"
                className={pizzaStyles.custom_select}
              >
                <MenuItem value={1}>Regular</MenuItem>
                <MenuItem value={1.5}>Medium</MenuItem>
                <MenuItem value={2}>Large</MenuItem>
              </Select>
            </FormControl>
          </div>
          {/* <div className={pizzaStyles.form_item}>
            <label>Crust</label>
            <Select
              className={pizzaStyles.custom_select}
              sx={{ maxWidth: 180 }}
              placeholder="New Hand Tossed"
            >
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={20}>20</MenuItem>
              <MenuItem value={30}>30</MenuItem>
            </Select>
          </div> */}
          <div className={pizzaStyles.form_item}>
            <label>Quantity</label>
            <NumberInput />
          </div>
        </div>
        <hr />
        {isInCart ? (
          <Button className={pizzaStyles.cart_button}>
            <Image src={cartIcon} alt="cartIcon" />
            <span>View in cart</span>
          </Button>
        ) : (
          <Button onClick={() => addProductToCart()} className={pizzaStyles.cart_button}>
            <Image src={cartIcon} alt="cartIcon" />
            <span>Add to Cart</span>
          </Button>
        )}
      </div>
    </section>
  );
};

export default PizzaDetail;
