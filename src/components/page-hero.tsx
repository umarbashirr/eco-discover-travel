import React from "react";
import { Container } from "./container";

interface IPageHero {
  title: string;
  tagline: string;
  image?: string;
}

export const PageHero: React.FC<IPageHero> = ({
  title,
  tagline,
  image = "/ground.jpg",
}) => {
  return (
    <Container>
      <div
        className="rounded-xl shadow flex items-center justify-center flex-col h-[450px] w-full"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="max-w-[80%] mx-auto text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white relative text-center">
          {title}
        </h1>
        <p className="relative text-white italic text-center  mt-4">
          {tagline}
        </p>
      </div>
    </Container>
  );
};
