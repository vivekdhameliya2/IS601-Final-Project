import { Swiper, SwiperSlide } from "swiper/react";
import sliderStyles from "./slider.module.scss";
import SwiperButtonPrev from "./SwiperButtonPrev";
import SwiperButtonNext from "./SwiperButtonNext";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const CustomSlider = ({ card: Card, data, breakpoints }) => {
  return (
    <div className={sliderStyles.container}>
      <Swiper breakpoints={breakpoints} spaceBetween={30} slidesPerView={3}>
        <div className={sliderStyles.slider_nav}>
          <SwiperButtonPrev />
          <SwiperButtonNext />
        </div>
        {data.map((item) => {
          return (
            <SwiperSlide>
              <Card item={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default CustomSlider;
