import { sendEmail } from "@/lib/resend";
import { ContactFormSchema } from "@/schemas/contact-form.schema";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validatedFields = ContactFormSchema.safeParse(body);

    if (!validatedFields.success) {
      return NextResponse.json(validatedFields.error.flatten().fieldErrors);
    }

    const { name, email, phoneNumber, subject, message } = validatedFields.data;

    const emailTemplate = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px; padding: 20px; background-color: #f9f9f9;">
        <div style="text-align: center; margin-bottom: 20px;">
            <img src="${process.env.NEXT_PUBLIC_APP_URL}/logo.svg" alt="Eco Discover Travel Logo" style="max-width: 150px;">
        </div>
        <p style="font-size: 16px; margin-bottom: 10px;"><strong>Dear Team,</strong></p>
        <p style="margin-bottom: 20px;">We have received a new ticket submission on our website with the details below:</p>
        
        <table style="width: 100%; border-collapse: collapse;">
            <tr>
                <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #ddd;">Name:</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${name}</td>
            </tr>
            <tr>
                <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #ddd;">Email:</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${email}</td>
            </tr>
            <tr>
                <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #ddd;">Phone Number:</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${phoneNumber}</td>
            </tr>
            <tr>
                <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #ddd;">Subject:</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${subject}</td>
            </tr>
            <tr>
                <td style="padding: 10px; font-weight: bold;">Message:</td>
                <td style="padding: 10px;">${message}</td>
            </tr>
        </table>

        <p style="margin-top: 20px;">Regards,</p>
        <p style="font-weight: bold;">Dev Team</p>
    </div>
`;

    sendEmail("New Ticket Received", emailTemplate);

    return NextResponse.json("Email Sent", { status: 200 });
  } catch (error: any) {
    return NextResponse.json(error.message, { status: 500 });
  }
}
