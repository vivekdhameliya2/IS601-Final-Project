import { Button } from "@mui/material";
import Image from "next/image";
import { useSwiper } from "swiper/react";
import arrow from "../../../assets/images/arrow.svg";

const SwiperButtonNext = () => {
  const swiper = useSwiper();
  return (
    <Button
      className={!swiper.allowSlideNext ? "disabled" : ""}
      onClick={() => swiper.slideNext()}
    >
      <Image src={arrow} alt="arrow" />
    </Button>
  );
};
export default SwiperButtonNext;
