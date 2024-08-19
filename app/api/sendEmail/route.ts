import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: any, res: NextApiResponse) {
  try {
    const data = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "rocket.hurghada@gmail.com",
        pass: "uxkh gbfu bxhe eaaa ",
      },
    });

    const mailOptions = {
      from: "WebSite",
      to: "info@divemix.com",
      subject: "New sales request",
      text: `
        Name: ${data.name}
        Email: ${data.email}
        Service: ${data.service}
        Message: ${data.message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email", error);
    return NextResponse.json({ message: "Internal Server Error" });
  }
}