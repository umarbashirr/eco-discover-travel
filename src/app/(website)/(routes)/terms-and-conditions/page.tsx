import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

const TermsAndConditionsPage = () => {
  return (
    <>
      <PageHero title="Terms & Conditions" tagline="test" />
      <Container className="my-12 md:my-24 lg:max-w-screen-lg">
        <p className="mb-4  text-muted-foreground leading-loose">
          Welcome to Eco Discover Travel! By accessing our services and making
          bookings with us, you agree to abide by the following terms and
          conditions. Please read them carefully to ensure a smooth and
          enjoyable travel experience.
        </p>
        <div>
          <h3 className="text-xl font-medium mb-2">
            1. Booking and Payment Policy
          </h3>

          <ul className="mt-2 list-disc ml-8 space-y-2">
            <li className=" text-muted-foreground leading-loose">
              To confirm a booking, a minimum 40% advance payment is required.
            </li>
            <li className=" text-muted-foreground leading-loose">
              The balance payment must be cleared before checkout or as per
              prior arrangement.
            </li>
            <li className=" text-muted-foreground leading-loose">
              Bookings are subject to availability, and Eco Discover Travel
              reserves the right to accept or decline any reservation request.
            </li>
          </ul>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-medium mb-2">
            2. Cancellation and Refund Policy
          </h3>

          <ul className="mt-2 list-disc ml-8 space-y-2">
            <li className=" text-muted-foreground leading-loose">
              Cancellations must be communicated via email to{" "}
              <Link href="mailto:hotels@ecodiscovertravel.com">
                hotels@ecodiscovertravel.com
              </Link>
            </li>
            <li className=" text-muted-foreground leading-loose">
              Refunds, if applicable, will be processed within 14 business days
              after cancellation confirmation.
            </li>
          </ul>
          <p className="mt-4 text-muted-foreground">
            Refunds will be processed as per our Cancellation Policy:
          </p>
          <Table className="border border-collapse mt-4">
            <TableHeader className="border bg-gray-50">
              <TableRow>
                <TableHead className="border">
                  Cancellation Timeframe{" "}
                </TableHead>
                <TableHead className="border">Refund Policy </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="border">
                  Up to 14 days before check-in
                </TableCell>
                <TableCell className="border">Full refund</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="border">
                  13 to 7 days before check-in{" "}
                </TableCell>
                <TableCell className="border">50% refund</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="border">
                  Within 7 days of check-in{" "}
                </TableCell>
                <TableCell className="border">No refund</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-medium mb-2">3. Modification Policy</h3>
          <ul className="mt-2 list-disc ml-8 space-y-2">
            <li className=" text-muted-foreground leading-loose">
              Date changes are allowed up to 7 days before check-in, subject to
              availability.
            </li>
            <li className=" text-muted-foreground leading-loose">
              Rate adjustments may apply based on new dates.
            </li>
          </ul>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-medium mb-2">4. Early Departure</h3>
          <ul className="mt-2 list-disc ml-8 space-y-2">
            <li className=" text-muted-foreground leading-loose">
              No refunds will be provided for unused services or remaining
              nights in the case of early departures.
            </li>
          </ul>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-medium mb-2">
            5. Responsibilities and Liabilities
          </h3>
          <ul className="mt-2 list-disc ml-8 space-y-2">
            <li className=" text-muted-foreground leading-loose">
              Eco Discover Travel is not responsible for any delays, changes in
              itinerary, or cancellations caused by unforeseen circumstances
              such as natural disasters, government restrictions, or strikes.
            </li>
            <li className=" text-muted-foreground leading-loose">
              Travelers are responsible for providing accurate and complete
              personal information during the booking process.
            </li>
            <li className=" text-muted-foreground leading-loose">
              Guests are expected to comply with all local laws, customs, and
              regulations during their trip.
            </li>
          </ul>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-medium mb-2">
            6. Activities and Services
          </h3>
          <ul className="mt-2 list-disc ml-8 space-y-2">
            <li className=" text-muted-foreground leading-loose">
              Participation in adventure activities or excursions is at the
              traveler’s own risk.
            </li>
            <li className=" text-muted-foreground leading-loose">
              Eco Discover Travel is not liable for any injuries, damages, or
              losses incurred during such activities. Travelers are advised to
              purchase appropriate travel insurance for their trip.
            </li>
          </ul>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-medium mb-2">
            7. Privacy and Data Protection
          </h3>
          <ul className="mt-2 list-disc ml-8 space-y-2">
            <li className=" text-muted-foreground leading-loose">
              Eco Discover Travel respects your privacy and ensures that your
              personal information will be used only for booking purposes and
              will not be shared without your consent.
            </li>
            <li className=" text-muted-foreground leading-loose">
              For details on how your information is handled, please refer to
              our Privacy Policy.
            </li>
          </ul>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-medium mb-2">8. Amendments to Terms</h3>
          <ul className="mt-2 list-disc ml-8 space-y-2">
            <li className=" text-muted-foreground leading-loose">
              Eco Discover Travel reserves the right to amend these terms and
              conditions without prior notice. Changes will be effective
              immediately upon posting on our website or notifying you via
              email.
            </li>
          </ul>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-medium mb-2">9. Governing Law</h3>
          <ul className="mt-2 list-disc ml-8 space-y-2">
            <li className=" text-muted-foreground leading-loose">
              These terms and conditions are governed by the laws of Jammu &
              Kashmir, and any disputes will be resolved under the jurisdiction
              of local courts.
            </li>
          </ul>
        </div>
        <p className="mt-4 text-muted-foreground">
          For any questions or further clarification, feel free to contact us
          at: Email: hotels@ecodiscovertravel.com
        </p>
      </Container>
    </>
  );
};

export default TermsAndConditionsPage;
