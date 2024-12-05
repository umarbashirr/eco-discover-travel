import { Container } from "@/components/container";
import { DestinationsSlide } from "@/components/destinations-slide";
import { HeroSection } from "@/components/hero-section";
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
      <HeroSection />

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
