import Image from "next/image";
import homeStyle from "../../../styles/homepage.module.scss";
import menuStyle from "../../../styles/menu.module.scss";
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

const DealsAndOffers = ({ background, coupons }) => {

  return (
    <section
    style={{background: background}}
      className={`${homeStyle.special_menu} ${menuStyle.deals_container} custom-container `}
    >
      <p>{coupons.subTitle}</p>
      <div data-testid="pizza-section-dealsSubTitle" className={homeStyle.special_menu_tagline}>
        <div className={homeStyle.special_menu_title}>
          <h2 data-testid="pizza-section-dealsTitle" >{coupons.title}</h2>
          <Image width={54} height={54} src={"/images/PizzaSlide.svg"} alt="PizzaSlide" />
        </div>
      </div>
      <CustomSlider breakpoints={breakpoints} data={coupons.coupons} card={DealsCard} />
    </section>
  );
};

export default DealsAndOffers;