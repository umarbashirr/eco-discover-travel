import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { Mail, MapPin, PhoneCall } from "lucide-react";
import Link from "next/link";

const ContactPage = () => {
  return (
    <>
      <PageHero
        title="Contact Us"
        tagline="We're here to help you plan your perfect journey. Reach out to us for any inquiries or assistance."
      />
      <section className="my-12 md:my-24 w-full">
        <Container className="w-full flex flex-col lg:flex-row  gap-10">
          <div className="w-full max-w-[500px] shadow-sm border rounded-xl p-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary">
              Get in Touch
            </h2>
            <p className="text-sm text-text mt-2">
              Reach us through your preferred channel. We&apos;re here to assist
              you.
            </p>
            <h3 className="mt-8 mb-2 text-xl font-medium">Details</h3>
            <div className="flex flex-col gap-2 text-text">
              <div className="flex items-start gap-2">
                <PhoneCall className="w- 4 h-4 mt-1 shrink-0" />
                <div className="flex flex-col gap-1">
                  <Link
                    href="tel:+917006853438"
                    className="flex items-center gap-2 "
                  >
                    +91 7006 853 438
                  </Link>
                  <Link
                    href="tel:+919797324071"
                    className="flex items-center gap-2 "
                  >
                    +91 9797 324 071
                  </Link>
                </div>
              </div>
              <Link
                href="mailto:info@ecodiscovertravel.com"
                className="flex items-start gap-2 "
              >
                <Mail className="w- 4 h-4 mt-1  shrink-0" />{" "}
                info@ecodiscovertravel.com
              </Link>
              <div className="flex items-start gap-2 ">
                <MapPin className="w- 4 h-4 mt-1 shrink-0" />{" "}
                <address>
                  Eco Discover Travel, Near Akad Park, Pahalgam, Jammu &
                  Kashmir, India
                </address>
              </div>
            </div>
            <h3 className="mt-4 mb-2 text-xl font-medium">Operating Hours</h3>
            <ul className="list-disc ml-8 flex flex-col gap-2 text-text">
              <li>Everyday: 8:00 AM - 8:00 PM</li>
            </ul>
          </div>
          <div className="w-full  shadow-sm border rounded-xl p-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary">
              Write to Us{" "}
            </h2>
            <p className="text-sm text-text mt-2">
              Have questions or need assistance? Fill out the form, and
              we&apos;ll get back to you shortly.
            </p>
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
};

export default ContactPage;
