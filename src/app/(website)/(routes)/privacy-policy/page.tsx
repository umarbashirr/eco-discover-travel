import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import Link from "next/link";

const PrivacyPolicyPage = () => {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        tagline="Safeguarding Your Personal Information with Transparency"
      />
      <Container className="my-12 md:my-24 lg:max-w-screen-lg">
        <p className="text-muted-foreground leading-loose">
          At <strong>Eco Discover Travel</strong>, your privacy is important to
          us. This Privacy Policy explains how we collect, use, and protect your
          personal information when you use our services or interact with our
          website.
        </p>
        <div className="mt-4">
          <h3 className="text-xl font-semibold mb-1">
            1. Booking and Payment Policy
          </h3>
          <div className="ml-4">
            <p className="text-muted-foreground leading-loose">
              We collect different types of information to ensure our services
              meet your expectations:
            </p>
            <div className="mt-2">
              <h4 className="font-medium text-lg">Personal Information</h4>
              <p className="leading-loose text-muted-foreground">
                We gather personal details such as your name, phone number,
                email address, and physical address when you make a booking or
                contact us.
              </p>
            </div>
            <div className="mt-2">
              <h4 className="font-medium text-lg">Payment Information</h4>
              <p className="leading-loose text-muted-foreground">
                To facilitate transactions, we collect billing details like your
                name, billing address, and payment method. Sensitive payment
                information (e.g., credit card details) is processed securely by
                our payment partners and is not stored on our systems.
              </p>
            </div>
            <div className="mt-2">
              <h4 className="font-medium text-lg">Website Usage Information</h4>
              <p className="leading-loose text-muted-foreground">
                When you browse our website, we collect technical data such as
                your IP address, browser type, device information, and pages
                visited. This data helps us enhance your experience and improve
                our platform.
              </p>
            </div>
            <div className="mt-2">
              <h4 className="font-medium text-lg">Communication Records</h4>
              <p className="leading-loose text-muted-foreground">
                We may retain correspondence, including emails and chat records,
                to assist with customer inquiries and improve support services.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-semibold mb-1">
            2. How We Use Your Information
          </h3>
          <div className="ml-4">
            <p className="text-muted-foreground leading-loose">
              The information we collect is used to deliver and improve our
              services.
            </p>
            <div className="mt-2">
              <h4 className="font-medium text-lg">Reservation Management</h4>
              <p className="leading-loose text-muted-foreground">
                We use your data to confirm bookings, manage travel itineraries,
                and communicate updates about your reservations.
              </p>
            </div>
            <div className="mt-2">
              <h4 className="font-medium text-lg">Marketing and Promotions</h4>
              <p className="leading-loose text-muted-foreground">
                If you opt-in, we may send promotional offers and updates about
                our services via email or SMS. You can unsubscribe at any time.
              </p>
            </div>
            <div className="mt-2">
              <h4 className="font-medium text-lg">Improving Services</h4>
              <p className="leading-loose text-muted-foreground">
                Data such as browsing patterns help us optimize website
                performance, tailor our offerings, and understand user
                preferences.
              </p>
            </div>
            <div className="mt-2">
              <h4 className="font-medium text-lg">Compliance with Laws</h4>
              <p className="leading-loose text-muted-foreground">
                We may process your information as required to comply with legal
                obligations or respond to regulatory authorities.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-semibold mb-1">
            3. Sharing Your Information
          </h3>
          <div className="ml-4">
            <p className="text-muted-foreground leading-loose">
              We only share your information when it is necessary to fulfill
              services or as required by law.
            </p>
            <div className="mt-2">
              <h4 className="font-medium text-lg">
                Third-Party Service Providers
              </h4>
              <p className="leading-loose text-muted-foreground">
                Trusted third-party vendors assist us in delivering services
                such as payment processing, customer support, and email
                communications. These partners are bound by confidentiality
                agreements.
              </p>
            </div>
            <div className="mt-2">
              <h4 className="font-medium text-lg">Legal Obligations</h4>
              <p className="leading-loose text-muted-foreground">
                We may disclose personal data if required by law or in response
                to valid legal requests, such as court orders or subpoenas.
              </p>
            </div>
            <div className="mt-2">
              <h4 className="font-medium text-lg">Business Transfers</h4>
              <p className="leading-loose text-muted-foreground">
                In the event of a merger, acquisition, or sale of our business,
                customer information may be transferred to the new entity.
              </p>
              <p className="leading-loose text-muted-foreground">
                We do not sell or rent your personal information to any external
                party for marketing purposes.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-semibold mb-1">4. Data Security</h3>
          <div className="ml-4">
            <p className="text-muted-foreground leading-loose">
              We implement robust security measures to protect your information
              against unauthorized access, alteration, or destruction.
            </p>
            <div className="mt-2">
              <h4 className="font-medium text-lg">Secure Systems</h4>
              <p className="leading-loose text-muted-foreground">
                Our systems employ encryption protocols, firewalls, and secure
                storage solutions to ensure your data is safe.
              </p>
            </div>
            <div className="mt-2">
              <h4 className="font-medium text-lg">User Responsibility</h4>
              <p className="leading-loose text-muted-foreground">
                While we take all reasonable precautions, users are advised to
                safeguard their accounts with strong passwords and avoid sharing
                sensitive information with unverified entities.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-semibold mb-1">5. Your Rights</h3>
          <div className="ml-4">
            <p className="text-muted-foreground leading-loose">
              You have certain rights concerning your personal data, which
              include:
            </p>
            <div className="mt-2">
              <h4 className="font-medium text-lg">Access Your Data</h4>
              <p className="leading-loose text-muted-foreground">
                You may request a copy of the personal information we hold about
                you.
              </p>
            </div>
            <div className="mt-2">
              <h4 className="font-medium text-lg">Update Information</h4>
              <p className="leading-loose text-muted-foreground">
                If your data is incomplete or incorrect, you can request an
                update.
              </p>
            </div>
            <div className="mt-2">
              <h4 className="font-medium text-lg">Delete Data</h4>
              <p className="leading-loose text-muted-foreground">
                You can request deletion of your personal data unless it is
                required for legal or business purposes.
              </p>
            </div>
            <div className="mt-2">
              <h4 className="font-medium text-lg">Withdraw Consent</h4>
              <p className="leading-loose text-muted-foreground">
                If you’ve provided consent for marketing communications, you can
                withdraw it at any time.
              </p>
              <p className="leading-loose text-muted-foreground">
                To exercise these rights, contact us at
                <Link
                  href="mailto:info@ecodiscovertravel.com"
                  className="text-indigo-500"
                >
                  info@ecodiscovertravel.com
                </Link>
                . We aim to address all requests promptly, subject to applicable
                legal requirements.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-semibold mb-1">
            6. Retention of Information
          </h3>
          <div className="ml-4">
            <p className="text-muted-foreground leading-loose">
              We retain personal data only for as long as necessary to fulfill
              the purposes outlined in this policy. For legal or compliance
              reasons, some data may be retained for longer periods.
            </p>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-semibold mb-1">
            7. Updates to This Privacy Policy
          </h3>
          <div className="ml-4">
            <p className="text-muted-foreground leading-loose">
              We may revise this Privacy Policy from time to time to reflect
              changes in regulations or business practices. All updates will be
              posted on this page with the revised date. We encourage you to
              review this policy periodically.
            </p>
          </div>
        </div>
        <p className="mt-4 text-muted-foreground">
          For any questions or further clarification, feel free to contact us
          at: Email: info@ecodiscovertravel.com
        </p>
      </Container>
    </>
  );
};

export default PrivacyPolicyPage;
