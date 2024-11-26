"use client";

import { Container } from "@/components/container";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export const SliderContainer = ({ data }: { data: string[] }) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 7000,
    cssEase: "linear",
  };
  return (
    <Container className="rounded-xl overflow-hidden">
      <div className="slider-container w-full">
        <Slider {...settings} className="w-full rounded-xl overflow-hidden">
          {data.map((d: string, index: number) => (
            <div
              key={index}
              className="w-full h-[450px] relative rounded-xl overflow-hidden"
            >
              <Image src={d} alt="ladakh image" fill className="object-cover" />
            </div>
          ))}
        </Slider>
      </div>
    </Container>
  );
};
