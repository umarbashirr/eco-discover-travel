import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { features } from "@/data/features";
import { Reason } from "@/interfaces/feature.interface";
import Image from "next/image";

const AboutPage = () => {
  return (
    <>
      <PageHero
        title="About Us"
        tagline="Learn more about our journey, our services, and what we stand for."
      />
      <section className="my-12 md:my-24">
        <Container className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-primary">
              Who We Are
            </h2>
            <p className="text-text leading-normal mt-4">
              Eco Discover Travel organizes personalized trips to the scenic
              regions of Kashmir, Ladakh, and nearby destinations. We focus on
              creating meaningful travel experiences that allow you to explore
              the unique culture, landscapes, and traditions of these areas.
              With a deep understanding of the Himalayan region, we aim to
              provide reliable service and memorable journeys for all our
              travelers.
            </p>
            <h3 className="mt-6 text-xl font-medium">Key Highlights</h3>
            <ul className="list-disc ml-8 mt-4 text-text flex flex-col gap-2">
              <li>Over [X years] of expertise in the travel industry</li>
              <li>Specializing in Kashmir and Ladakh tours</li>
              <li>
                A focus on authentic experiences and sustainable travel
                practices
              </li>
            </ul>
          </div>
          <div className="relative w-full h-[350px]">
            <Image
              src="/who_we_are.jpg"
              alt="Team Image"
              fill
              className="object-cover rounded-xl shadow-sm"
            />
          </div>
        </Container>
      </section>
      <section className="my-12 md:my-24">
        <Container>
          <h2 className="text-2xl md:text-3xl font-semibold text-primary text-center">
            Why Choose Us
          </h2>
          <p className="text-sm text-text text-center mt-4">
            Your Journey, Our Commitment to Excellence
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature: Reason, index: number) => (
              <div
                className="p-6 rounded-xl shadow-sm flex flex-col items-center justify-center border"
                key={index}
              >
                <feature.icon className="w-8 h-8 text-primary mb-6" />
                <h3 className="text-xl font-medium text-primary mb-2 text-center">
                  {feature.title}
                </h3>
                <p className="text-text text-sm text-center">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default AboutPage;
