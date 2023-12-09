import { Button } from "@mui/material";
import homeStyle from "../../../assets/styles/homepage.module.scss";

const HeroSection = ({ data }) => {
    return (
        <section className={homeStyle.hero_section}>
        <div className={homeStyle.overlay_image}>
          <div className={`${homeStyle.offer_content} custom-container`}>
            <div className={homeStyle.offer_left}>
              <h3>{data.subtitle}</h3>
              <h2>
                {data.title} <span>{data.discount}</span>% Off
              </h2>
              <Button>{data.heroBtn}</Button>
            </div>
          </div>
        </div>
      </section>
    )
}

export default HeroSection