import nodemailer from "nodemailer";

const createTransporter = () => {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS ? process.env.SMTP_PASS.replace(/\s+/g, "") : "";

  if (!host || !user || !pass || pass === "your_gmail_app_password") {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: { user, pass },
  });
};

const sendContactEmails = async ({ name, email, subject, message }) => {
  const transporter = createTransporter();
  const receiver = process.env.NOTIFY_EMAIL || process.env.SMTP_USER || "ajitkumarsaini02@gmail.com";

  if (!transporter) {
    console.log(`📨 [Email Demo Mode] ${name} (${email}): "${subject}" - ${message}`);
    return { success: true, mode: "demo_logged" };
  }

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${process.env.SMTP_USER}>`,
      to: receiver,
      replyTo: email,
      subject: `💼 New Inquiry: ${subject || "Portfolio Contact"} (from ${name})`,
      html: `
        <div style="font-family:sans-serif;padding:20px;color:#222;border:1px solid #eee;border-radius:8px;">
          <h2 style="color:#0ea5e9;">New Message via Ajit's Portfolio</h2>
          <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <div style="background:#f8fafc;padding:15px;border-left:4px solid #0ea5e9;margin:15px 0;">
            ${message.replace(/\n/g, "<br/>")}
          </div>
          <p style="font-size:12px;color:#888;">Sent from Portfolio Contact API</p>
        </div>
      `,
    });

    await transporter.sendMail({
      from: `"Ajit Kumar Saini" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `Thank you for reaching out, ${name}!`,
      html: `
        <div style="font-family:sans-serif;padding:20px;color:#222;line-height:1.6;">
          <h2 style="color:#0ea5e9;">Hi ${name},</h2>
          <p>Thank you for reaching out through my portfolio website. I have received your message regarding <strong>"${subject}"</strong>.</p>
          <p>I will review your message and get back to you as soon as possible.</p>
          <br/>
          <p>Warm regards,<br/><strong>Ajit Kumar Saini</strong><br/>Full-Stack Developer &amp; Competitive Programmer</p>
        </div>
      `,
    });

    return { success: true, mode: "sent" };
  } catch (error) {
    console.error("❌ [Email Service] Send failed:", error.message);
    return { success: false, error: error.message };
  }
};

export { sendContactEmails, createTransporter };
export default sendContactEmails;
