import { createTransport } from "nodemailer";
import { config } from "dotenv";

config();

const transporter = createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

export const sendEmail = async (
  senderMail: string,
  recieverMail: string,
  subject: string,
  contentHTML: string,
) => {
  const mailOptions = {
    from: senderMail,
    to: recieverMail,
    subject: subject,
    html: contentHTML,
  };

  return transporter.sendMail(mailOptions);
};
