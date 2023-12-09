import pizzaStyles from "../../../assets/styles/pizza.module.scss";
import largePizza from "../../../assets/images/large-pizza.png";
import veg from "../../../assets/images/veg.svg";
import Image from "next/image";
import { Button, MenuItem, Rating, Select } from "@mui/material";
import cartIcon from "../../../assets/images/cartIconV2.svg";
import NumberInput from "../../NumberInput";

const PizzaDetail = () => {
  return (
    <section className={`${pizzaStyles.detail_container} custom-container`}>
      <div className={pizzaStyles.image_container}>
        <Image src={largePizza} alt="pizza-image" />
      </div>
      <div className={pizzaStyles.detail_content}>
        <div className={pizzaStyles.offer_wrap}>
          <div className={pizzaStyles.offer_chip}>OFFER</div>
          <Image src={veg} alt="veg" />
        </div>
        <h5>New Arrival</h5>
        <h2>Paneer Tikka Butter Masala Pizza</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
        <div className={pizzaStyles.rating_wrapper}>
          <Rating value={4} />
          <p>{`(11.78kreviews)`}</p>
        </div>
        <div className={pizzaStyles.price_wrapper}>
          <h6>$7.97</h6>
          <h5> $6.97</h5>
        </div>
        <hr />
        <div className={pizzaStyles.cartForm}>
          <div className={pizzaStyles.form_item}>
            <label>Size</label>
            <Select
              placeholder="Choose your size"
              className={pizzaStyles.custom_select}
              sx={{ maxWidth: 180 }}
            >
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={20}>20</MenuItem>
              <MenuItem value={30}>30</MenuItem>
            </Select>
          </div>
          <div className={pizzaStyles.form_item}>
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
          </div>
          <div className={pizzaStyles.form_item}>
            <label>Quantity</label>
            <NumberInput />
          </div>
        </div>
        <hr />
        <Button className={pizzaStyles.cart_button} >
          <Image src={cartIcon} alt="cartIcon" />
          <span>Add to Cart</span>
        </Button>
      </div>
    </section>
  );
};

export default PizzaDetail;
