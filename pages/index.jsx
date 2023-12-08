import Head from "next/head";
import Layout from "../components/Layout";
import homeStyle from "../assets/styles/homepage.module.scss";
import Image from "next/image";
import couponOne from "../assets/images/coupon_one.png";
import couponTwo from "../assets/images/coupon_Two.png";
import { Button } from "@mui/material";
import DeliverySection from "../components/HomeComponents/DeliverySection";

export default function Home() {
  return (
    <>
    <Layout>
      <Head>
        <title>Homepage</title>
      </Head>
      <section className={homeStyle.hero_section}>
        <div className={homeStyle.overlay_image}>
          <div className={`${homeStyle.offer_content} custom-container`}>
            <div className={homeStyle.offer_left}>
              <h3>Todays Best Deals</h3>
              <h2>
                Save Up To <span>50</span>% Off
              </h2>
              <Button>Order Now</Button>
            </div>
            <div className={homeStyle.offer_right}>
              <div className={homeStyle.offer_price}>
                <p>From</p> <span>$6.99</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`${homeStyle.coupon_section} custom-container`}>
        <div className={homeStyle.coupon}>
          <Image
            className={homeStyle.coupon_image}
            src={couponOne}
            alt="coupon-image"
          />
          <div className={homeStyle.coupon_content}>
            <h3>GET</h3>
            <div className={homeStyle.discount_wrapper}>
              <b>50</b>
              <sup>
                <span>%</span>
                <p>off</p>
              </sup>{" "}
            </div>
            <div className={homeStyle.coupon_label}>
              <p>USE CODE</p>
              <hr />
              <p>FASTIVE50</p>
            </div>
          </div>
        </div>
        <div className={`${homeStyle.coupon} ${homeStyle.couponTwo}`}>
          <Image
            className={homeStyle.coupon_image_two}
            src={couponTwo}
            alt="coupon-image"
          />
          <div className={homeStyle.coupon_offer2}>
            <div className={homeStyle.offer2_text} >
              <b>Buy 1 Get 1</b>
              <p>PIZZA OFFER</p>
            </div>
          </div>
          <div className={`${homeStyle.coupon_label} ${homeStyle.offer_label}`}>
              <p>USE CODE</p>
              <hr />
              <p>PIZZA5230</p>
            </div>
        </div>
      </section>
    </Layout>

    </>
    
  );
}