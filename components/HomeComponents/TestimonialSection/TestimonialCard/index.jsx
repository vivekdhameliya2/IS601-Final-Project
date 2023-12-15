import * as React from "react";
import Card from "@mui/material/Card";
import { StyledEngineProvider } from "@mui/material/styles";
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
    <StyledEngineProvider injectFirst>
      {" "}
      <Card className={cardStyles.testimonial_card} sx={{ maxWidth: 403 }}>
        <div className={cardStyles.testimonial_cardHeader_wrapper}>
          <CardHeader
            className={cardStyles.testimonial_cardHeader}
            titleTypographyProps={{
              className: cardStyles.testimonial_cardTitle,
            }}
            subheaderTypographyProps={{
              className: cardStyles.testimonial_cardDate,
            }}
            avatar={
              <Avatar
                className={cardStyles.testimonial_card_avatar}
                sx={{ bgcolor: "#000", maxWidth: 64, maxHeight: 64 }}
                aria-label="recipe"
              >
                <Image
                  alt="testimonial_image"
                  src={item.image}
                  width={64}
                  height={64}
                />
              </Avatar>
            }
            action={<Rating value={item.rating} />}
            title={item.fullName}
            subheader={item.date}
          />
        </div>
        <Typography className={cardStyles.testimonial_desc}>
          {item.desc}
        </Typography>
      </Card>
    </StyledEngineProvider>
  );
}
