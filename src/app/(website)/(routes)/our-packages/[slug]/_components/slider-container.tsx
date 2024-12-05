"use client";

import { Container } from "@/components/container";
import Slider from "react-slick";

export const SliderContainer = ({ data }: { data: string[] }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container className="overflow-hidden">
      <div className="slider-container w-full">
        <Slider {...settings} className="w-full  overflow-hidden">
          {data.map((d: string, index: number) => (
            <div key={index} className="w-full h-[450px] overflow-hidden">
              <div
                className="w-full h-full"
                style={{
                  background: `url(${d})`,
                  backgroundSize: "cover",
                  backgroundPosition: "bottom center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </div>
          ))}
        </Slider>
      </div>
    </Container>
  );
};
