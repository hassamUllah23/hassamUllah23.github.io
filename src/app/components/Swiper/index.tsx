import { Swiper, SwiperSlide, SwiperProps } from "swiper/react";
// Import Swiper styles
import "swiper/css";
type Props = { swiperProps: SwiperProps; images: Array<string> };
export function Album(props: Props) {
  return (
    <Swiper
      //   spaceBetween={50}
      //   slidesPerView={3}
      {...props}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {props.images.map((element, index) => (
        <SwiperSlide key={index}>
          <img src={element} className="h-full w-full" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
