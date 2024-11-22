import { Container } from "@/components/container";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <>
      <Container>
        <div className="relative w-full h-[70vh] md:h-[60vh] lg:h-[80vh]">
          <Image
            fill
            src="/hero.jpg"
            alt="Kashmir Image as Background"
            className="object-cover rounded-2xl shadow"
          />
          <div className="bg-accent w-full h-full absolute top-0 left-0 bg-opacity-60 rounded-2xl"></div>
          <div className="absolute top-0 left-0 w-full h-full ">
            <div className="flex flex-col items-center justify-center w-full h-full max-w-full md:max-w-[80%] mx-auto">
              <h1 className="text-3xl md:text-4xl 2xl:text-6xl font-bold lg:leading-snug text-center text-white">
                Explore the Beauty of Kashmir & Ladakh with Eco Discover Travel
              </h1>
              <p className="my-4 text-base md:text-lg md:leading-normal text-white text-center">
                Experience the majestic landscapes, vibrant cultures, and serene
                beauty of Kashmir and Ladakh. Choose from eco-friendly travel
                packages tailored just for you.
              </p>
              <div className="flex flex-col md:flex-row items-center gap-4">
                <Link
                  href="/our-packages"
                  className="bg-accent text-white rounded-md py-3 px-6 shadow-sm hover:bg-accent/90 transition-all duration-300 ease-in-out text-sm font-medium"
                >
                  Explore Our Packages
                </Link>
                <Link
                  href="/contact-us"
                  className="bg-gray-100 text-primary rounded-md py-3 px-6 shadow-sm hover:bg-gray-200 transition-all duration-300 ease-in-out text-sm font-medium"
                >
                  Book Your Trip Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default HomePage;
