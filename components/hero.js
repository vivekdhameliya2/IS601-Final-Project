// components/HeroSection.js
import React from 'react';
import { Typography, Button } from '@mui/material';
import styles from '../styles/Home.module.css';

const HeroSection = () => {
  return (
    <div className={styles.herosection}>
      {/* Hero Section */}
      <div className={styles.heroContainer}>
        <img
          className={styles.heroImage}
          src='/hero-background.jpg'
          alt="Hero Background"
        />
        <div className={styles.overlay}>
          <div className={styles.heroContent}>
            <Typography variant="h2" component="div" gutterBottom>
              CHEESY PIZZA
            </Typography>
            <Button variant="contained" color="primary">
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
