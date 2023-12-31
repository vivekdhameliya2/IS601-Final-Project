import Image from "next/image";
import homeStyle from "../../../styles/homepage.module.scss";
import CustomCard from "../../CustomCard";
import Link from "next/link";

const SpecialMenu = ({ data, allProducts, addProductToCart, cartData }) => {
  return (
    <section className={`${homeStyle.special_menu} custom-container `}>
      <p data-testid="special-menu-subtitle">{data.title}</p>
      <div className={homeStyle.special_menu_tagline}>
        <div className={homeStyle.special_menu_title}>
          <h2 data-testid="special-menu-title">{data.subTitle}</h2>
          <Image
            width={54}
            height={54}
            src={"/images/PizzaSlide.svg"}
            alt="PizzaSlide"
          />
        </div>
        <Link data-testid="viewall-link" href="/menu">View All</Link>
      </div>
      <div className={homeStyle.cardWrapper}>
        {allProducts.map((data, index) => {
          return (
            <CustomCard
              key={index}
              isInCart={
                cartData.filter((item) => item.uniqueId === data.fileName)[0]
              }
              addProductToCart={addProductToCart}
              data={data}
            />
          );
        })}
      </div>
    </section>
  );
};

export default SpecialMenu;
