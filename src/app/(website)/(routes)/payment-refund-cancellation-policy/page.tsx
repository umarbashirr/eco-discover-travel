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

const PaymentRefundCancellationPage = () => {
  return (
    <>
      <PageHero
        title="Payment, Refund and Cancellation Policy"
        tagline="Clear Policies for a Seamless Experience"
      />
      <Container className="my-12 md:my-24 lg:max-w-screen-lg">
        <p className="mb-4  text-muted-foreground">
          At Eco Discover Travel, we strive to provide our customers with a
          seamless and transparent booking experience. Please review our
          Payment, Refund, and Cancellation Policy below to understand the terms
          and conditions associated with your booking.
        </p>
        <div>
          <h3 className="text-xl font-medium mb-2">Advance Payment</h3>
          <p className=" text-muted-foreground leading-loose">
            To confirm your reservation for rooms, services, or activities:
          </p>
          <ul className="mt-2 list-disc ml-8 space-y-2">
            <li className=" text-muted-foreground leading-loose">
              A minimum 40% advance payment is required at the time of booking.
            </li>
            <li className=" text-muted-foreground leading-loose">
              The balance payment must be settled prior to checkout.
            </li>
          </ul>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-medium mb-2">Cancellation Policy</h3>
          <p className=" text-muted-foreground leading-loose">
            If you need to cancel a confirmed booking, kindly notify us by
            sending an email to either of the following addresses:
          </p>
          <ul className="mt-2 list-disc ml-8 space-y-2">
            <li>
              <strong>Email:</strong>{" "}
              <Link href="mailto:info@ecodiscovertravel.com">
                info@ecodiscovertravel.com
              </Link>
            </li>
          </ul>
          <p className="mt-4 text-muted-foreground">
            Our cancellation policy and applicable refunds are outlined below:
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
          <h3 className="text-xl font-medium mb-2">
            Modifications (Date Changes)
          </h3>
          <ul className="mt-2 list-disc ml-8 space-y-2">
            <li className=" text-muted-foreground leading-loose">
              Date changes are allowed up to 7 days before check-in, subject to
              room or service availability.
            </li>
            <li className=" text-muted-foreground leading-loose">
              Rate adjustments may apply for modifications.
            </li>
          </ul>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-medium mb-2">Early Departure</h3>
          <ul className="mt-2 list-disc ml-8 space-y-2">
            <li className=" text-muted-foreground leading-loose">
              No refunds will be issued for unused services or remaining nights
              in the case of early departure.
            </li>
          </ul>
        </div>
        <p className="mt-4 text-muted-foreground">
          For any questions or further clarification, feel free to contact us
          at: Email: info@ecodiscovertravel.com
        </p>
      </Container>
    </>
  );
};

export default PaymentRefundCancellationPage;
