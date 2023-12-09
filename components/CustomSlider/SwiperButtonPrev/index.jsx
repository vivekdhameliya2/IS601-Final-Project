import { Button } from "@mui/material";
import Image from "next/image";
import { useSwiper } from "swiper/react";
import arrow from "../../../assets/images/arrow.svg";
import { useEffect } from "react";

const SwiperButtonPrev = () => {
  const swiper = useSwiper();
  
  return (
    <Button  className={!swiper.allowSlidePrev ? "disabled" : ""} disabled={!swiper.allowSlidePrev} onClick={() => swiper.slidePrev()}>
      <Image src={arrow} alt="arrow" />
    </Button>
  );
};
export default SwiperButtonPrev;
