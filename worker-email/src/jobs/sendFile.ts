import { transporter } from "../utils/mailer";

export async function sendFileToEmailJob(
  sendEmail: string,
  clientEmail: string,
  ownerFirstName: string,
  ownerEmail: string,
  data: Buffer
) {
  const mailer = await transporter(ownerEmail);
  await mailer.sendMail({
    from: `"${ownerFirstName}" <${ownerEmail}>`,
    to: `${sendEmail || clientEmail}  `,
    subject: "An invoice for payment",
    text: " Hello!! That's your invoice.",
    attachments: [{ filename: "Invoice.pdf", content: Buffer.from(data) }],
  });
}
