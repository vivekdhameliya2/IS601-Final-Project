import { Button } from "@mui/material";
import Image from "next/image";
import { useSwiper } from "swiper/react";

const SwiperButtonPrev = () => {
  const swiper = useSwiper();
  
  return (
    <Button  className={!swiper.allowSlidePrev ? "disabled" : ""} disabled={!swiper.allowSlidePrev} onClick={() => swiper.slidePrev()}>
      <Image width={20} height={20} src={"/images/arrow.svg"} alt="arrow" />
    </Button>
  );
};
export default SwiperButtonPrev;
