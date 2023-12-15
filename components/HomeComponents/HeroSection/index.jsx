import { Button } from "@mui/material";
import homeStyle from "../../../styles/homepage.module.scss";

const HeroSection = ({ data, handleOpen }) => {
  return (
    <section className={homeStyle.hero_section}>
      <div className={homeStyle.overlay_image}>
        <div className={`${homeStyle.offer_content} custom-container`}>
          <div className={homeStyle.offer_left}>
            <h3 data-testid="hero-section-subtitle">{data.subTitle}</h3>
            <h2>
              {data.title}{" "}
              <span data-testid="hero-section-discount">{data.discount}</span>%
              Off
            </h2>
            <Button
              data-testid="hero-section-button"
              onClick={() => handleOpen()}
            >
              {data.heroBtn}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
