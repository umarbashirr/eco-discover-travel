"server only";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (subject: string, html: string) => {
  return await resend.emails.send({
    from: "Eco Discover Travel <info@ecodiscovertravel.com>",
    to: "info@ecodiscovertravel.com",
    subject: subject,
    html: html,
  });
};
