import Image from "next/image";
import aboutStyles from "../../../assets/styles/about.module.scss";
import medal from "../../../assets/images/medal-line.svg";
import gps from "../../../assets/images/gps-line.svg";
import bike from "../../../assets/images/e-bike-2-line.svg";

const OurService = () => {
  return (
    <section className={`${aboutStyles.our_service} custom-container`}>
      <div className={aboutStyles.service_wrapper}>
        <div className={aboutStyles.service_image}>
          <Image src={medal} alt="service_icon " />
        </div>
        <div className={aboutStyles.service_content}>
          <h5>Premium Quality</h5>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </div>
      <div className={aboutStyles.service_wrapper}>
        <div className={aboutStyles.service_image}>
          <Image src={gps} alt="service_icon " />
        </div>
        <div className={aboutStyles.service_content}>
          <h5>Variety of Dishes</h5>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </div>
      <div className={aboutStyles.service_wrapper}>
        <div className={aboutStyles.service_image}>
          <Image src={bike} alt="service_icon " />
        </div>
        <div className={aboutStyles.service_content}>
          <h5>Fastest Delivery</h5>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurService;