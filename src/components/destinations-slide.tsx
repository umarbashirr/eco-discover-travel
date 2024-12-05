"use client";

import { TopDestinations } from "@/data/destinations";
import { IDestination } from "@/interfaces/destination.interface";
import { cn } from "@/lib/utils";
import { useState } from "react";

export const DestinationsSlide = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  return (
    <div className="flex flex-col lg:flex-row flex-nowrap gap-4 mt-8 md:mt-12">
      {TopDestinations.map((destination: IDestination, index: number) => (
        <div
          key={index}
          className={cn(
            "w-full h-[350px] lg:h-[550px] border rounded-xl shadow transition-all duration-500 ease-in-out overflow-hidden flex flex-col justify-end p-6",
            currentSlide === index
              ? "max-w-full h-[350px]"
              : "h-[100px] lg:max-h-full max-w-full lg:w-[200px]"
          )}
          onClick={() => setCurrentSlide(index)}
          style={{
            background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${destination?.image_url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div
            className={cn(
              "flex flex-col gap-1 ",
              currentSlide === index ? "lg:rotate-0" : "lg:-rotate-90"
            )}
          >
            <h3 className="text-xl font-semibold text-white">
              {destination?.name}
            </h3>
            <p className={cn("text-white flex items-center gap-1")}>Kashmir</p>
          </div>
        </div>
      ))}
    </div>
  );
};
