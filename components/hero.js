// components/HeroSection.js
import React from "react";
import { Typography, Button } from "@mui/material";
import styles from "../styles/Home.module.css";

const HeroSection = () => {
  return (
    <div className={styles.herosection}>
      {/* Hero Section */}
      <div className={styles.heroContainer}>
        <img
          className={styles.heroImage}
          src="/hero-background.jpg"
          alt="Hero Background"
        />
        <div className={styles.overlay}>
          <div className={styles.heroContent}>
            <Typography
              variant="h2"
              component="div"
              gutterBottom
              sx={{
                color: "var(--secondary-main, #FFB200)",
                fontFamily: "Oregano",
                fontSize: "30px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
              }}
            >
              Super Delicious
            </Typography>
            <Typography variant="h2" component="div" gutterBottom>
              CHEESY PIZZA
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "var(--secondary-main, #FFB200)", // Use your desired color
                color: "#fff", // Text color
                "&:hover": {
                  backgroundColor: "var(--secondary-dark, #FFB200)", // Use a darker color on hover if needed
                },
              }}
            >
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
