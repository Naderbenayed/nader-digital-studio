import nodemailer from "nodemailer";

function getField(formData: FormData, field: string) {
  const value = formData.get(field);
  return typeof value === "string" ? value.trim() : "";
}

function redirectTo(request: Request, path: string) {
  return Response.redirect(new URL(path, request.url), 303);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const name = getField(formData, "name");
  const email = getField(formData, "email");
  const service = getField(formData, "service");
  const message = getField(formData, "message");
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeService = escapeHtml(service);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

  if (!name || !email || !service || !message) {
    return redirectTo(request, "/contact?error=missing");
  }

  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
  const contactToEmail = process.env.CONTACT_TO_EMAIL ?? gmailUser;

  if (!gmailUser || !gmailAppPassword || !contactToEmail) {
    return redirectTo(request, "/contact?error=config");
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: gmailUser,
      pass: gmailAppPassword,
    },
  });

  try {
    await transporter.sendMail({
      from: `Nader Digital Studio <${gmailUser}>`,
      to: contactToEmail,
      replyTo: email,
      subject: `Nouvelle demande - ${service}`,
      text: [
        "Nouvelle demande depuis le site Nader Digital Studio",
        "",
        `Nom: ${name}`,
        `Email: ${email}`,
        `Service: ${service}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: `
        <h2>Nouvelle demande depuis le site Nader Digital Studio</h2>
        <p><strong>Nom :</strong> ${safeName}</p>
        <p><strong>Email :</strong> ${safeEmail}</p>
        <p><strong>Service :</strong> ${safeService}</p>
        <p><strong>Message :</strong></p>
        <p>${safeMessage}</p>
      `,
    });

    return redirectTo(request, "/contact?sent=1");
  } catch (error) {
    console.error("Contact form email failed", error);
    return redirectTo(request, "/contact?error=send");
  }
}
