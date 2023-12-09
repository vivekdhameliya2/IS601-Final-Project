import Image from "next/image";
import homeStyle from "../../../assets/styles/homepage.module.scss";
import menuStyle from "../../../assets/styles/menu.module.scss";
import PizzaSlide from "../../../assets/images/PizzaSlide.svg";
import CustomSlider from "../../CustomSlider";
import DealsCard from "./DealCard";

const breakpoints = {
    120: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    668: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 768px
    1068: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  };

const DealsAndOffers = ({ background }) => {
  return (
    <section
    style={{background: background}}
      className={`${homeStyle.special_menu} ${menuStyle.deals_container} custom-container `}
    >
      <p>Special Menu</p>
      <div className={homeStyle.special_menu_tagline}>
        <div className={homeStyle.special_menu_title}>
          <h2>Deals And Offers</h2>
          <Image src={PizzaSlide} alt="PizzaSlide" />
        </div>
      </div>
      <CustomSlider breakpoints={breakpoints} data={Array(5).fill(2)} card={DealsCard} />
    </section>
  );
};

export default DealsAndOffers;
