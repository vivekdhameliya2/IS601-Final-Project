import Image from "next/image";
import aboutStyles from "../../../assets/styles/about.module.scss";
import greenTick from "../../../assets/images/checkbox-circle-fill.svg";
import serviceV2 from "../../../assets/images/service-v2.png";
import Button from "@mui/material/Button";

const OurServiceV2 = () => {
  return (
    <section className={`${aboutStyles.our_service_v2} custom-container`}>
      <div className={aboutStyles.service_v2_content}>
        <h5>Special Menu</h5>
        <h2>Enjoy An Exceptional Journey of Taste</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
        <div className={aboutStyles.services}>
          <div className={aboutStyles.service}>
            <Image src={greenTick} alt="greeen_tick" />
            <span>Fresh Food</span>
          </div>
          <div className={aboutStyles.service}>
            <Image src={greenTick} alt="greeen_tick" />
            <span>The best ingredient</span>
          </div>
          <div className={aboutStyles.service}>
            <Image src={greenTick} alt="greeen_tick" />
            <span>24/7 Service </span>
          </div>
          <div className={aboutStyles.service}>
            <Image src={greenTick} alt="greeen_tick" />
            <span>The highest quality</span>
          </div>
        </div>
        <Button>BUY NOW</Button>
      </div>
      <div className={aboutStyles.service_v2_image}>
        <Image src={serviceV2} alt="service-image" />
      </div>
    </section>
  );
};

export default OurServiceV2;
