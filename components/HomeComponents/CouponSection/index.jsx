import homeStyle from "../../../assets/styles/homepage.module.scss";
import Image from "next/image";
import couponOne from "../../../assets/images/coupon_one.png";
import couponTwo from "../../../assets/images/coupon_Two.png";

const CouponSection = ({ coupons }) => {
  return (
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
            <b>{coupons.discountOffer.discount}</b>
            <sup>
              <span>%</span>
              <p>off</p>
            </sup>{" "}
          </div>
          <div className={homeStyle.coupon_label}>
            <p>USE CODE</p>
            <hr />
            <p>{coupons.discountOffer.code}</p>
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
          <div className={homeStyle.offer2_text}>
            <b>{coupons.purchaseOffer.title}</b>
            <p>PIZZA OFFER</p>
          </div>
        </div>
        <div className={`${homeStyle.coupon_label} ${homeStyle.offer_label}`}>
          <p>USE CODE</p>
          <hr />
          <p>{coupons.purchaseOffer.code}</p>
        </div>
      </div>
    </section>
  );
};

export default CouponSection;
