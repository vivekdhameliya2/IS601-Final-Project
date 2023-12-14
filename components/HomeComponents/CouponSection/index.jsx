import homeStyle from "../../../styles/homepage.module.scss";
import Image from "next/image";

const CouponSection = ({ coupons }) => {
  return (
    <section className={`${homeStyle.coupon_section} custom-container`}>
      <div className={homeStyle.coupon}>
        <div className={homeStyle.coupon_image} >
          <Image
            width={341}
            height={341}
            src={"/images/coupon_one.png"}
            alt="coupon-image"
          />
        </div>
        <div className={homeStyle.coupon_content}>
          <h3>GET</h3>
          <div className={homeStyle.discount_wrapper}>
            <b>{coupons.discountOffer.discount}</b>
            <sup>%</sup>{" "}
          </div>
          <div className={homeStyle.coupon_label}>
            <p>USE CODE</p>
            <hr />
            <p>{coupons.discountOffer.code}</p>
          </div>
        </div>
      </div>
      <div className={`${homeStyle.coupon} ${homeStyle.couponTwo}`}>
        <div className={homeStyle.coupon_image} >
        <Image
          width={341}
          height={341}
          src={"/images/coupon_Two.png"}
          alt="coupon-image"
        />
        </div>
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
