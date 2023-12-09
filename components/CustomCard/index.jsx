import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import pizzaOne from "../../assets/images/pizza-1.png";
import Image from "next/image";
import { Button, Rating } from "@mui/material";
import cardStyles from "./card.module.scss";
import veg from '../../assets/images/veg.svg';
import cart from '../../assets/images/cart.svg';
import nonVeg from '../../assets/images/non-veg.svg';

export default function CustomCard({ data }) {
  return (
    <Card className={cardStyles.card} sx={{ maxWidth: 255 }}>
        <div className={cardStyles.foodType} >
            <Image src={veg} alt="veg" />
        </div>
      <Image src={data.image} width={255} height={223} alt="pizzaOne" />
      <div className={cardStyles.content} >
        <h5>{data.title}</h5>
        <div className={cardStyles.price_section} >
            <p>${(+data.price).toFixed(2)}</p>
            <Rating value={data.rating} sx={{color: "#faaf00"}} />
        </div>
      </div>
      <CardActions sx={{width: "100%"}} className={cardStyles.actions} disableSpacing>
        <Button sx={{width: "100%"}}  >
            <span>ADD TO CART</span>
            <Image src={cart} alt="cart" />
        </Button>
      </CardActions>
    </Card>
  );
}
