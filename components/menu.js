import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

export default function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: 295, height: 400 }}>
      <CardMedia component="img" alt="green iguana" height="140" image="/pizza.png" />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            color: "var(--text-light-primary, #212B36)",
            fontFamily: "Public Sans",
            fontSize: "18px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "28px",
            marginLeft: "auto",
          }}
        >
          Spring Filling Pizza
        </Typography>
      </CardContent>
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{
          display: "flex",
          alignItems: "center",
          mr: 2,
          fontFamily: "Oswald",
          fontWeight: 700,
          fontSize: "24px",
          fontStyle: "normal",
          lineHeight: "28px",
          color: "var(--primary-main, #B80818)",
          textDecoration: "none",
          marginLeft: "20px", // Add left margin of 20px
        }}
      >
        $10.00
        <div style={{ backgroundColor: "yellow", marginLeft: "auto" }}>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </div>
      </Typography>
      <CardActions>
        <Button
          variant="contained"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "var(--secondary-main, #FFB200)",
            color: "#000",
            "&:hover": {
              backgroundColor: "var(--secondary-dark, #FFB200)",
            },
            marginTop: "18px",
            width: "100%",
            padding: "12px",
          }}
        >
          <span>ADD TO CART</span>
          <ShoppingBagOutlinedIcon />
        </Button>
      </CardActions>
    </Card>
  );
}
