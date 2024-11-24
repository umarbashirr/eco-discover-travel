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
              Reach us through your preferred channel. We're here to assist you.
            </p>
            <h3 className="mt-8 mb-2 text-xl font-medium">Details</h3>
            <div className="flex flex-col gap-2 text-text">
              <Link href="tel:00" className="flex items-center gap-2 ">
                <PhoneCall className="w- 4 h-4" /> +91 7889737464
              </Link>
              <Link
                href="mailto:info@ecodiscovertravel.com"
                className="flex items-center gap-2 "
              >
                <Mail className="w- 4 h-4" /> info@ecodiscovertravel.com
              </Link>
              <div className="flex items-center gap-2 ">
                <MapPin className="w- 4 h-4" />{" "}
                <address>
                  Eco Discover Travel, Srinagar, Jammu & Kashmir, India
                </address>
              </div>
            </div>
            <h3 className="mt-4 mb-2 text-xl font-medium">Operating Hours</h3>
            <ul className="list-disc ml-8 flex flex-col gap-2 text-text">
              <li>Monday to Saturday: 9:00 AM - 7:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
          <div className="w-full  shadow-sm border rounded-xl p-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary">
              Write to Us{" "}
            </h2>
            <p className="text-sm text-text mt-2">
              Have questions or need assistance? Fill out the form, and we'll
              get back to you shortly.
            </p>
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
};

export default ContactPage;
