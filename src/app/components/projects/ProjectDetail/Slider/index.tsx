import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, EffectCoverflow, Pagination } from "swiper/modules";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import { useDisclosure } from "@nextui-org/react";

type Props = {
  images: Array<string>;
  maxHeight?: number;
};

const Slider = ({ images, maxHeight }: Props) => {
  return (
    <Swiper
      style={{ maxHeight: maxHeight }}
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {images.map((image: string, index) => {
        return (
          <SwiperSlide>
            <img
              src={image}
              alt="image"
              width={"100%"}
              height={"auto"}
              className={maxHeight ? `max-h-[${maxHeight}px]` : ""}
              style={{
                borderRadius: "10px",
              }}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
    // <Swiper
    //   spaceBetween={5}
    //   slidesPerView={1}
    //   watchSlidesProgress={false}
    //   watchOverflow={false}
    //   navigation={true}
    //   modules={[Navigation, Autoplay]}
    //   className="m-0 p-0 py-2"
    //   style={{
    //     maxWidth: "fit-content",
    //     overflow: "hidden",
    //   }}
    // >
    //   {images.map((image: string, index) => {
    //     return (
    //       <div style={{ maxWidth: "150px", width: "100%" }}>
    //         <img
    //           src={image}
    //           alt="image"
    //           className="w-[100px]"
    //           style={{
    //             borderRadius: "10px",
    //           }}
    //         />
    //       </div>
    //       // <Swiper
    //       //   spaceBetween={30}
    //       //   centeredSlides={true}
    //       //   autoplay={{
    //       //     delay: 2500,
    //       //     disableOnInteraction: false,
    //       //   }}
    //       //   pagination={{
    //       //     clickable: true,
    //       //   }}
    //       //   navigation={true}
    //       //   modules={[Autoplay, Pagination, Navigation]}
    //       //   className="mySwiper"
    //       // >

    //       //   <SwiperSlide>Slide 1</SwiperSlide>
    //       // </Swiper>
    //       // <SwiperSlide
    //       //   key={index}
    //       //   style={{
    //       //     height: "fit-content",
    //       //     overflow: "hidden",
    //       //     width: "100px",
    //       //   }}
    //       //   className="flex cursor-pointer flex-row justify-center"
    //       // >
    //       //   <div style={{ maxWidth: "150px", width: "100%" }}>
    //       //     <img
    //       //       src={image}
    //       //       alt="image"
    //       //       className="w-[100px]"
    //       //       style={{
    //       //         borderRadius: "10px",
    //       //       }}
    //       //     />
    //       //   </div>
    //       // </SwiperSlide>
    //     );
    //   })}
    // </Swiper>
  );
};

export { Slider };
