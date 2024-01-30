import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import { useDisclosure } from "@nextui-org/react";

type Props = {
  images: Array<string>;
};

const Slider = ({ images }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Swiper
      spaceBetween={5}
      slidesPerView={1}
      watchSlidesProgress={false}
      watchOverflow={false}
      // navigation
      modules={[Navigation, EffectCoverflow, Pagination]}
      className="m-0 p-0 py-2"
      style={{
        maxWidth: "fit-content",
        overflow: "hidden",
        backgroundColor: "green",
      }}
    >
      {images.map((image: string, index) => {
        return (
          <SwiperSlide
            key={index}
            style={{
              height: "fit-content",
              overflow: "hidden",
              backgroundColor: "red",
              width: "100px",
            }}
            className="flex flex-row justify-center cursor-pointer"
          >
            <div style={{ maxWidth: "150px", width: "100%" }}>
              <img
                src={image}
                alt="image"
                className="w-[100px]"
                style={{
                  borderRadius: "10px",
                }}
              />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export { Slider };
