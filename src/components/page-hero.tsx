import React from "react";
import { Container } from "./container";

interface IPageHero {
  title: string;
  tagline: string;
}

export const PageHero: React.FC<IPageHero> = ({ title, tagline }) => {
  return (
    <Container>
      <div className="bg-[url('/ground.jpg')] bg-center bg-cover flex items-center justify-center h-[350px] rounded-2xl shadow-sm flex-col relative overflow-hidden">
        <div className="bg-primary/30 absolute top-0 left-0 w-full h-full"></div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white relative">
          {title}
        </h1>
        <p className="relative text-white italic text-center  mt-4">
          {tagline}
        </p>
      </div>
    </Container>
  );
};
