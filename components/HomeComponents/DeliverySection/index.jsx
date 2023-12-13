import Image from "next/image";
import homeStyle from "../../../assets/styles/homepage.module.scss";
import deliBoy from '../../../assets/images/delivery-boy.png';

const DeliverySection = ({ data }) => {
  return (
    <section className={`${homeStyle.special_menu} ${homeStyle.delivery_section} custom-container `}>
      <p>{data.title}</p>
      <div className={homeStyle.special_menu_tagline}>
        <div className={`${homeStyle.special_menu_title} ${homeStyle.delivery_title}`}>
          <h2>{data.subTitle}</h2>
        </div>
        <div className={homeStyle.delivery_boy}>
            <Image src={deliBoy} alt="deliBoy" />
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;
