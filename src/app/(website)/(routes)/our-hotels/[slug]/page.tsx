import React from "react";
import hotelData from "@/data/hotels.json";
import { PageHero } from "@/components/page-hero";
import { ContainedContainer } from "@/components/contained-container";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const SingleHotelPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  const hotel = hotelData.find((hotel) => hotel.slug === slug);

  console.log(hotel);

  return (
    <>
      <PageHero
        title={hotel?.name}
        tagline={hotel?.summary}
        image="/pahalgam-bg.jpg"
      />
      <ContainedContainer className="my-12 md:my-24">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10">
          <Card>
            <CardHeader>
              <CardTitle>
                <h2 className="font-bold text-2xl">Hotel Description</h2>
              </CardTitle>
              <CardDescription>
                <p className="text-muted-foreground text-base leading-relaxed">
                  {hotel?.details?.description}
                </p>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div>
                <div className="space-y-1">
                  <Separator orientation="horizontal" />
                  <Separator orientation="horizontal" />
                </div>
                <h3 className="font-semibold text-lg my-2 px-2">Amenities</h3>
                <div className="space-y-1">
                  <Separator orientation="horizontal" />
                  <Separator orientation="horizontal" />
                </div>
                <ul className="list-disc list-inside space-y-1 text-text mt-6">
                  {hotel?.amenities.map((amenity: string, index) => (
                    <li key={index}>{amenity}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-8">
                <div className="space-y-1">
                  <Separator orientation="horizontal" />
                  <Separator orientation="horizontal" />
                </div>
                <h3 className="font-semibold text-lg my-2 px-2">Room TYpes</h3>
                <div className="space-y-1">
                  <Separator orientation="horizontal" />
                  <Separator orientation="horizontal" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  {hotel?.rooms?.map((room: any, index: number) => (
                    <div
                      key={index}
                      className="border rounded-lg overflow-hidden"
                    >
                      <div className="w-full min-h-[300px] relative">
                        <Image
                          src={room?.details?.cover?.source || ""}
                          alt={room?.details?.cover?.caption}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-semibold text-md">{room?.name}</h4>
                        <p className="text-text text-sm leading-relaxed mt-2">
                          {room?.short_description}
                        </p>
                        <div>
                          <h5 className="font-medium text-sm mt-4">
                            Starting at ₹{room?.details?.price_from} / night
                          </h5>
                        </div>
                        <div className="mt-4">
                          <Button
                            className="w-full block"
                            size="lg"
                            variant="accent"
                          >
                            Book Now
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </ContainedContainer>
    </>
  );
};

export default SingleHotelPage;
