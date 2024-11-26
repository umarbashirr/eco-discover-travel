import { Container } from "@/components/container";
import { DestinationsSlide } from "@/components/destinations-slide";
import { Button } from "@/components/ui/button";
import { TravelPackages } from "@/data/packages";
import { ITravelPackage } from "@/interfaces/package.interface";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  const kashmirPackages = TravelPackages.filter(
    (travelPackage) => travelPackage.destination.toLowerCase() === "kashmir"
  );
  const ladakhPackages = TravelPackages.filter(
    (travelPackage) => travelPackage.destination.toLowerCase() === "ladakh"
  );

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

      {/* Top Locations */}
      <section id="topLocations" className="my-12 md:my-24">
        <Container>
          <h1 className="text-2xl md:text-4xl font-semibold text-center">
            Top Destinations
          </h1>
          <p className="text-muted-foreground text-sm text-center mt-4 md:max-w-4xl mx-auto">
            Discover the unparalleled beauty of Kashmir and Ladakh with our
            curated travel packages. From snow-capped mountains to serene
            valleys, these destinations promise unforgettable experiences.
          </p>
          <DestinationsSlide />
        </Container>
      </section>

      {/* Recent Packages */}
      {/* <section id="recentPackages" className="my-12 md:my-24">
        <Container>
          <h1 className="text-2xl md:text-4xl font-semibold text-center">
            Explore Our Latest Travel Packages
          </h1>
          <p className="text-muted-foreground text-sm text-center mt-4 md:max-w-4xl mx-auto">
            Discover our newest Kashmir and Ladakh travel packages, featuring
            handpicked itineraries that offer unforgettable experiences. Book
            now and create memories that last a lifetime!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8 md:mt-12">
            {TravelPackages.slice(0, 6).map(
              (travelPackage: ITravelPackage, index: number) => (
                <div
                  key={index}
                  className="border shadow rounded-xl overflow-hidden"
                >
                  <div className="w-full h-[250px] relative">
                    <Image
                      src={travelPackage?.featured_image}
                      alt={travelPackage?.destination + " image"}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 w-full flex flex-col">
                    <Link href={`/our-packages/${travelPackage?.slug}`}>
                      <h3 className="text-lg font-medium">
                        {travelPackage.title}
                      </h3>
                    </Link>
                    <p className="text-sm text-muted-foreground mt-4 line-clamp-2">
                      {travelPackage?.short_desc}
                    </p>
                    <div className="py-2 border-t border-b my-4 flex items-center gap-4 text-muted-foreground">
                      <p className="flex items-center gap-2 text-sm">
                        <MapPin className="w-4 h-4" />{" "}
                        {travelPackage?.destination}
                      </p>
                      <p className="text-sm flex items-center gap-2">
                        <Calendar className="w-4 h-4" />{" "}
                        {travelPackage?.duration?.nights} N /{" "}
                        {travelPackage?.duration?.days} D
                      </p>
                    </div>
                    <Button asChild variant="outline">
                      <Link href={`/our-packages/${travelPackage?.slug}`}>
                        View Details <ArrowRight className="w-3 h-3" />
                      </Link>
                    </Button>
                  </div>
                </div>
              )
            )}
          </div>
        </Container>
      </section> */}

      {/* Kashmir Packages */}
      <section id="kashmirPackages" className="my-12 md:my-24">
        <Container>
          <h1 className="text-2xl md:text-4xl font-semibold text-center">
            Kashmir Packages
          </h1>
          <p className="text-muted-foreground text-sm text-center mt-4 md:max-w-4xl mx-auto">
            Discover the beauty of Kashmir with our tailored packages. From Dal
            Lake to the snow-covered peaks of Gulmarg, experience nature,
            culture, and adventure in one unforgettable journey.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8 md:mt-12">
            {kashmirPackages
              .slice(0, 3)
              .map((travelPackage: ITravelPackage, index: number) => (
                <div
                  key={index}
                  className="border shadow rounded-xl overflow-hidden"
                >
                  <div className="w-full h-[250px] relative">
                    <Image
                      src={travelPackage?.featured_image}
                      alt={travelPackage?.destination + " image"}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 w-full flex flex-col">
                    <Link href={`/our-packages/${travelPackage?.slug}`}>
                      <h3 className="text-lg font-medium">
                        {travelPackage.title}
                      </h3>
                    </Link>
                    <p className="text-sm text-muted-foreground mt-4 line-clamp-2">
                      {travelPackage?.short_desc}
                    </p>
                    <div className="py-2 border-t border-b my-4 flex items-center gap-4 text-muted-foreground">
                      <p className="flex items-center gap-2 text-sm">
                        <MapPin className="w-4 h-4" />{" "}
                        {travelPackage?.destination}
                      </p>
                      <p className="text-sm flex items-center gap-2">
                        <Calendar className="w-4 h-4" />{" "}
                        {travelPackage?.duration?.nights} N /{" "}
                        {travelPackage?.duration?.days} D
                      </p>
                    </div>
                    <Button asChild variant="outline">
                      <Link href={`/our-packages/${travelPackage?.slug}`}>
                        View Details <ArrowRight className="w-3 h-3" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
          </div>
        </Container>
      </section>

      {/* Ladakh Packages */}
      <section id="ladakhPackages" className="my-12 md:my-24">
        <Container>
          <h1 className="text-2xl md:text-4xl font-semibold text-center">
            Ladakh Packages
          </h1>
          <p className="text-muted-foreground text-sm text-center mt-4 md:max-w-4xl mx-auto">
            Experience the rugged beauty of Ladakh with our adventure-filled
            packages. From the highest motorable roads to serene lakes and
            monasteries, Ladakh offers a unique journey for the bold traveler.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8 md:mt-12">
            {ladakhPackages
              .slice(0, 3)
              .map((travelPackage: ITravelPackage, index: number) => (
                <div
                  key={index}
                  className="border shadow rounded-xl overflow-hidden"
                >
                  <div className="w-full h-[250px] relative">
                    <Image
                      src={travelPackage?.featured_image}
                      alt={travelPackage?.destination + " image"}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 w-full flex flex-col">
                    <Link href={`/our-packages/${travelPackage?.slug}`}>
                      <h3 className="text-lg font-medium">
                        {travelPackage.title}
                      </h3>
                    </Link>
                    <p className="text-sm text-muted-foreground mt-4 line-clamp-2">
                      {travelPackage?.short_desc}
                    </p>
                    <div className="py-2 border-t border-b my-4 flex items-center gap-4 text-muted-foreground">
                      <p className="flex items-center gap-2 text-sm">
                        <MapPin className="w-4 h-4" />{" "}
                        {travelPackage?.destination}
                      </p>
                      <p className="text-sm flex items-center gap-2">
                        <Calendar className="w-4 h-4" />{" "}
                        {travelPackage?.duration?.nights} N /{" "}
                        {travelPackage?.duration?.days} D
                      </p>
                    </div>
                    <Button asChild variant="outline">
                      <Link href={`/our-packages/${travelPackage?.slug}`}>
                        View Details <ArrowRight className="w-3 h-3" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default HomePage;
