import Image from "next/image";
import homeStyle from "../../../assets/styles/homepage.module.scss";
import PizzaSlide from "../../../assets/images/PizzaSlide.svg";
import CustomCard from "../../CustomCard";
import Link from "next/link";

const SpecialMenu = ({ data, allProducts }) => {
  
  return (
    <section className={`${homeStyle.special_menu} custom-container `}>
      <p>{data.title}</p>
      <div className={homeStyle.special_menu_tagline}>
        <div className={homeStyle.special_menu_title}>
          <h2>{data.subTitle}</h2>
          <Image src={PizzaSlide} alt="PizzaSlide" />
        </div>
        <Link href="/menu" >View All</Link>
      </div>
      <div className={homeStyle.cardWrapper}>
        {allProducts.map((data) => {
          return <CustomCard data={data} />;
        })}
      </div>
    </section>
  );
};

export default SpecialMenu;
