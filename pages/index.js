import Head from "next/head";
import styles from "../styles/Home.module.css";
import * as React from "react";
import Button from "@mui/material/Button";
import { AppBar, Toolbar, Typography } from "@mui/material";
import Navbar from "../components/navbar";
import Herosection from "../components/hero";
import TitlebarBelowImageList from "../components/offer";
import ImgMediaCard from "../components/menu"
import Tesimonial from "../components/tesimonial";
import Footer from "../components/footer";
import ColorInversionFooter from "../components/footer";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
     <Navbar/>
     <Herosection/>
     <h3>Deals and offer</h3>
     <div className={styles.centerContainer}>
     <TitlebarBelowImageList/>
     </div>
     <h3>Menu</h3>
     <div style={{}}>
      <Header
        bigText="special Menu"
        belowText="From Italy Pizza, With Love"
      />
    </div>
     <div className={styles.menucard}>
     <ImgMediaCard/>
     <ImgMediaCard/>
     <ImgMediaCard/>
     <ImgMediaCard/>
     </div>
     <h3>Tesimonial</h3>
     <Tesimonial/>  

     <ColorInversionFooter/>
      
       </>
  );
}
