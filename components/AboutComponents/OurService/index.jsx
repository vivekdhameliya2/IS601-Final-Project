import Image from "next/image";
import aboutStyles from "../../../styles/about.module.scss";

const OurService = ({ data }) => {
  return (
    <section className={`${aboutStyles.our_service} custom-container`}>
      {data.map((item, index) => {
        return (
          <div key={index} className={aboutStyles.service_wrapper}>
            <div className={aboutStyles.service_image}>
              <Image src={item.image} width={32} height={32} alt="service_icon " />
            </div>
            <div className={aboutStyles.service_content}>
              <h5>{item.title}</h5>
              <p>
                {item.desc}
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default OurService;
