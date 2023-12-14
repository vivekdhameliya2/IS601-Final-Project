import Image from "next/image";
import homeStyle from "../../../styles/homepage.module.scss";
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

const OurTeam = ({ team }) => {
  return (
    <section
      className={`${homeStyle.special_menu} ${homeStyle.testimonail_section} custom-container `}
    >
      <p>{team.subTitle}</p>
      <div className={homeStyle.special_menu_tagline}>
        <div className={homeStyle.special_menu_title}>
          <h2>{team.title}</h2>
          <Image width={54} height={54} src={"/images/PizzaSlide.svg"} alt="PizzaSlide" />
        </div>
       
      </div>
      <CustomSlider breakpoints={breakpoints} data={team.Chefs} card={TeamCard} />
    </section>
  );
};

export default OurTeam;
