import * as React from "react";
import Card from "@mui/material/Card";
import Image from "next/image";
import {
  Avatar,
  CardHeader,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";
import cardStyles from "./testimonial.module.scss";

export default function TestimonialCard({ item }) {
  return (
    <Card className={cardStyles.card} sx={{ maxWidth: 403 }}>
      <div className={cardStyles.cardHeader_wrapper}>
        <CardHeader
          className={cardStyles.cardHeader}
          titleTypographyProps={{ className: cardStyles.cardTitle }}
          subheaderTypographyProps={{ className: cardStyles.cardDate }}
          avatar={
            <Avatar
              className={cardStyles.card_avatar}
              sx={{ bgcolor: "#000", maxWidth: 64, maxHeight: 64 }}
              aria-label="recipe"
            >
              <Image src={item.image} width={64} height={64} />
            </Avatar>
          }
          action={
            <Rating value={item.rating} />
          }
          title={item.fullName}
          subheader={item.date}
        />
      </div>
      <Typography className={cardStyles.desc}>
          {item.desc}
      </Typography>
    </Card>
  );
}
