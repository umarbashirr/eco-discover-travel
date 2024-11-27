"use client";

import React, { useEffect, useState } from "react";
import { Container } from "./container";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const slides = ["/hero.jpg", "/nubra.jpg", "/leh.jpg", "/ladakh-3.jpg"];

export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const autoplay = () => {
    setCurrentSlide((prevSlide) => {
      if (prevSlide === slides.length - 1) {
        return 0; // Restart from the first slide
      }
      return prevSlide + 1;
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      autoplay();
    }, 3000); // Adjust the interval time as needed

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Container>
      <div className="relative w-full h-[70vh] md:h-[60vh] lg:h-[80vh]">
        <Image
          fill
          src={slides[currentSlide]}
          alt="Kashmir Image as Background"
          className="object-cover object-center rounded-2xl shadow"
        />
        <div className="bg-primary/60 w-full h-full absolute top-0 left-0 rounded-2xl"></div>
        <div className="absolute top-0 left-0 w-full h-full ">
          <div className="flex flex-col items-center justify-center w-full h-full max-w-full md:max-w-[80%] mx-auto">
            <h1 className="text-3xl md:text-4xl 2xl:text-6xl font-bold 2xl:leading-normal text-center text-white">
              Explore the Beauty of Kashmir & Ladakh with Eco Discover Travel
            </h1>
            <p className="my-4 text-base md:text-lg md:leading-normal text-white text-center">
              Experience the majestic landscapes, vibrant cultures, and serene
              beauty of Kashmir and Ladakh. Choose from eco-friendly travel
              packages tailored just for you.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <Button asChild variant="accent" size="xl">
                <Link href="/our-packages">Explore Our Packages</Link>
              </Button>
              <Button asChild variant="secondary" size="xl">
                <Link href="/contact-us">Book Your Trip Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
