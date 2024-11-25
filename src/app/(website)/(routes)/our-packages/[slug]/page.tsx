import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { TravelPackages } from "@/data/packages";
import { ItineraryItem, ITravelPackage } from "@/interfaces/package.interface";
import React from "react";
import { PackageBookingForm } from "./_components/package-booking-form";
import { Check, X } from "lucide-react";

const SinglePackagePage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  const selectedPackage: ITravelPackage | undefined = TravelPackages.find(
    (tp) => tp.slug === slug
  );

  return (
    <>
      <PageHero
        title={selectedPackage?.title || ""}
        tagline="Experience the journey of a lifetime with our thoughtfully curated package."
      />
      <section className="my-12 md:my-24">
        <Container className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10">
          <div className="border rounded-xl p-6 shadow">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Overview
            </h2>
            <p className="text-text leading-loose">
              {selectedPackage?.overview}
            </p>
            <div className="mt-8">
              <h2 className="text-2xl font-semibold text-primary">
                Trip Highlights
              </h2>
              <ul className="mt-4 flex flex-col gap-2 list-disc ml-8 text-text">
                {selectedPackage?.highlights.map(
                  (highlight: string, index: number) => (
                    <li key={index}>{highlight}</li>
                  )
                )}
              </ul>
            </div>
            <div className="mt-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Tour Itinerary
              </h2>
              <div className="flex flex-col space-y-4">
                {selectedPackage?.itinerary.map(
                  (it: ItineraryItem, index: number) => (
                    <div
                      key={index}
                      className="flex flex-col space-y-2 border rounded-lg"
                    >
                      <h3 className="text-lg font-medium text-primary bg-gray-100 p-2">{`Day ${
                        index + 1
                      }: ${it?.title}`}</h3>
                      <p className="mb-2 text-text p-2 leading-loose">
                        {it?.details}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="mt-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Costs
              </h2>
              <div className="flex flex-col space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-primary">
                    Cost Includes
                  </h3>
                  <ul className="list-disc flex flex-col gap-2 ml-8 mt-4">
                    {selectedPackage?.includes.map(
                      (include: string, index: number) => (
                        <li className="flex items-center gap-2" key={index}>
                          <Check className="w-4 h-4 text-green-500" />{" "}
                          <span>{include}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-primary">
                    Cost Excludes
                  </h3>
                  <ul className="list-disc flex flex-col gap-2 ml-8 mt-4">
                    {selectedPackage?.includes.map(
                      (include: string, index: number) => (
                        <li className="flex items-center gap-2" key={index}>
                          <X className="text-red-500 w-4 h-4" />{" "}
                          <span>{include}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full border p-6 rounded-xl shadow self-start sticky top-[100px]">
            <h2 className="text-2xl font-semibold text-primary mb-2">
              Enquiry Form
            </h2>
            <p className="text-text text-sm mb-4">
              Fill out the below form in order to get the quotation for this
              package.
            </p>
            <PackageBookingForm initialData={selectedPackage} />
          </div>
        </Container>
      </section>
    </>
  );
};

export default SinglePackagePage;
