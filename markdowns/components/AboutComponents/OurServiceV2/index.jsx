import Image from "next/image";
import aboutStyles from "../../../styles/about.module.scss";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";

const OurServiceV2 = ({ data }) => {
  const router = useRouter();

  return (
    <section className={`${aboutStyles.our_service_v2} custom-container`}>
      <div className={aboutStyles.service_v2_content}>
        <h5>{data.subTitle}</h5>
        <h2>{data.title}</h2>
        <p>{data.desc}</p>
        <div className={aboutStyles.services}>
          {data.services.map((item, index) => {
            return (
              <div key={index} className={aboutStyles.service}>
                <Image width={24} height={24} src={item.image} alt="greeen_tick" />
                <span>{item.title}</span>
              </div>
            );
          })}
        </div>
        <Button onClick={() => router.push('/menu')} >{data.btnText}</Button>
      </div>
      <div className={aboutStyles.service_v2_image}>
        <Image width={685} height={510} src={"/images/service-v2.png"} alt="service-image" />
      </div>
    </section>
  );
};

export default OurServiceV2;
