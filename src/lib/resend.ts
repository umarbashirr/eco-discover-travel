"server only";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = (subject: string, html: string) => {
  return resend.emails.send({
    from: "Eco Discover Travel <info@ecodiscovertravel.com>",
    to: "info@ecodiscovertravel.com",
    subject: subject,
    html: html,
  });
};
