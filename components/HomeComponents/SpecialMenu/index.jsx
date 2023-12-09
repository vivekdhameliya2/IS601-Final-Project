import Image from "next/image";
import homeStyle from "../../../assets/styles/homepage.module.scss";
import PizzaSlide from "../../../assets/images/PizzaSlide.svg";
import CustomCard from "../../CustomCard";

const SpecialMenu = ({ data, allPizza }) => {
  
  return (
    <section className={`${homeStyle.special_menu} custom-container `}>
      <p>{data.pizzaListTitle}</p>
      <div className={homeStyle.special_menu_tagline}>
        <div className={homeStyle.special_menu_title}>
          <h2>{data.pizzaListDesc}</h2>
          <Image src={PizzaSlide} alt="PizzaSlide" />
        </div>
        <span>View All</span>
      </div>
      <div className={homeStyle.cardWrapper}>
        {allPizza.map((data) => {
          return <CustomCard data={data} />;
        })}
      </div>
    </section>
  );
};

export default SpecialMenu;
