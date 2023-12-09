import Image from "next/image";
import homeStyle from "../../../assets/styles/homepage.module.scss";
import PizzaSlide from "../../../assets/images/PizzaSlide.svg";
import CustomSlider from "../../CustomSlider";
import TeamCard from "./TeamCard";

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
    slidesPerView: 2,
    spaceBetween: 30,
  },
  // when window width is >= 768px
  768: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
  // when window width is >= 768px
  1068: {
    slidesPerView: 4,
    spaceBetween: 30,
  },
};

const OurTeam = () => {
  return (
    <section
      className={`${homeStyle.special_menu} ${homeStyle.testimonail_section} custom-container `}
    >
      <p>Meet Our Team</p>
      <div className={homeStyle.special_menu_tagline}>
        <div className={homeStyle.special_menu_title}>
          <h2>Chef’s Team</h2>
          <Image src={PizzaSlide} alt="PizzaSlide" />
        </div>
       
      </div>
      <CustomSlider breakpoints={breakpoints} data={Array(5).fill(2)} card={TeamCard} />
    </section>
  );
};

export default OurTeam;
