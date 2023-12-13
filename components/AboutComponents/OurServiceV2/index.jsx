import Image from "next/image";
import aboutStyles from "../../../assets/styles/about.module.scss";
import serviceV2 from "../../../assets/images/service-v2.png";
import Button from "@mui/material/Button";

const OurServiceV2 = ({ data }) => {
  return (
    <section className={`${aboutStyles.our_service_v2} custom-container`}>
      <div className={aboutStyles.service_v2_content}>
        <h5>{data.subTitle}</h5>
        <h2>{data.title}</h2>
        <p>{data.desc}</p>
        <div className={aboutStyles.services}>
          {data.services.map((item) => {
            return (
              <div className={aboutStyles.service}>
                <Image width={24} height={24} src={item.image} alt="greeen_tick" />
                <span>{item.title}</span>
              </div>
            );
          })}
        </div>
        <Button>{data.btnText}</Button>
      </div>
      <div className={aboutStyles.service_v2_image}>
        <Image src={serviceV2} alt="service-image" />
      </div>
    </section>
  );
};

export default OurServiceV2;
