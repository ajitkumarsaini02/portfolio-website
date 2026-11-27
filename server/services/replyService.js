import { createTransporter } from "./emailService.js";

const sendReplyEmail = async ({ to, name, subject, replyText }) => {
  const transporter = createTransporter();
  if (!transporter) {
    throw new Error("SMTP transporter is not configured on server.");
  }

  const html = `
    <div style="font-family:sans-serif;padding:24px;color:#222;max-width:600px;margin:0 auto;line-height:1.6;border:1px solid #e2e8f0;border-radius:10px;">
      <h2 style="color:#0ea5e9;margin-top:0;">Response from Ajit Kumar Saini</h2>
      <p>Hi ${name || "there"},</p>
      <div style="background:#f8fafc;padding:16px;border-left:4px solid #0ea5e9;margin:16px 0;border-radius:4px;white-space:pre-wrap;">
        ${replyText.replace(/\n/g, "<br/>")}
      </div>
      <p style="margin-top:24px;font-size:0.9rem;color:#475569;">
        Best regards,<br/>
        <strong>Ajit Kumar Saini</strong><br/>
        Full-Stack Developer &amp; Competitive Programmer<br/>
        <a href="https://ajit-kumar-saini-portfolio.vercel.app/" style="color:#0ea5e9;">Portfolio</a> | <a href="mailto:ajitkumarsaini02@gmail.com" style="color:#0ea5e9;">ajitkumarsaini02@gmail.com</a>
      </p>
    </div>
  `;

  return transporter.sendMail({
    from: `"Ajit Kumar Saini" <${process.env.SMTP_USER}>`,
    to,
    subject: subject || "Response from Ajit Kumar Saini",
    html,
  });
};

export { sendReplyEmail };
export default sendReplyEmail;
