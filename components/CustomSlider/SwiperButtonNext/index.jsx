import { Button } from "@mui/material";
import Image from "next/image";
import { useSwiper } from "swiper/react";

const SwiperButtonNext = () => {
  const swiper = useSwiper();
  return (
    <Button
      className={!swiper.allowSlideNext ? "disabled" : ""}
      onClick={() => swiper.slideNext()}
    >
      <Image width={20} height={20} src={"/images/arrow.svg"} alt="arrow" />
    </Button>
  );
};
export default SwiperButtonNext;
