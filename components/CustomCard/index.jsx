import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Image from "next/image";
import { Button, Rating } from "@mui/material";
import cardStyles from "./card.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

export default function CustomCard({ data, addProductToCart, isInCart }) {
  const router = useRouter();
  const cartHandler = (data) => {
    if (isInCart) {
      router.push(`/menu/${data.fileName.replace(".md", "")}`);
    } else {
      addProductToCart(data)
    }
  }

  return (
    <Card className={cardStyles.card} sx={{ maxWidth: 255 }}>
      <div className={cardStyles.foodType}>
        <Image width={20} height={20} src={data.veg ? "/images/veg.svg" : "/images/non-veg.svg"} alt="veg" />
      </div>
      <Image src={data.image} width={255} height={223} alt="pizzaOne" />
      <div className={cardStyles.content}>
        <Link href={data.detailPath}>{data.title}</Link>
        <div className={cardStyles.price_section}>
          <p>${(+data.price).toFixed(2)}</p>
          <Rating value={data.rating} sx={{ color: "#faaf00" }} />
        </div>
      </div>
      <CardActions
        sx={{ width: "100%" }}
        className={cardStyles.actions}
        disableSpacing
      >
        <Button data-testid={isInCart ? "go-to-cart" : "add-to-cart"} onClick={() => cartHandler(data)} sx={{ width: "100%" }}>
          <span>{isInCart ? "GO TO CART" : "ADD TO CART"}</span>
          <Image width={18} height={18} src={"/images/cart.svg"} alt="cart" />
        </Button>
      </CardActions>
    </Card>
  );
}