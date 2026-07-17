const BREVO_API_KEY = process.env.BREVO_API_KEY || "";
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "infohermansoftware@gmail.com";

export async function sendEmail({
  name,
  email,
  subject,
  message,
}: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": BREVO_API_KEY,
      "accept": "application/json",
    },
    body: JSON.stringify({
      sender: {
        name: "OneCard Contact Form",
        email: CONTACT_EMAIL,
      },
      to: [
        {
          email: CONTACT_EMAIL,
          name: "Herman Software Solutions",
        },
      ],
      replyTo: {
        email: email,
        name: name,
      },
      subject: `[OneCard] ${subject || "New Contact Form Submission"}`,
      htmlContent: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; background: #f8f9fa; margin: 0; padding: 20px; }
            .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
            .header { background: #0A1F3F; padding: 24px; text-align: center; }
            .header h1 { color: #00C2BA; margin: 0; font-size: 24px; }
            .header p { color: #9CA3AF; margin: 4px 0 0; font-size: 14px; }
            .body { padding: 24px; }
            .field { margin-bottom: 16px; }
            .field-label { font-size: 12px; color: #9CA3AF; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; }
            .field-value { font-size: 16px; color: #374151; }
            .message-box { background: #f8f9fa; padding: 16px; border-radius: 8px; border-left: 3px solid #00C2BA; margin-top: 8px; line-height: 1.6; }
            .footer { background: #f8f9fa; padding: 16px 24px; text-align: center; font-size: 12px; color: #9CA3AF; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>OneCard</h1>
              <p>New Contact Form Submission</p>
            </div>
            <div class="body">
              <div class="field">
                <div class="field-label">Name</div>
                <div class="field-value">${name}</div>
              </div>
              <div class="field">
                <div class="field-label">Email</div>
                <div class="field-value">${email}</div>
              </div>
              <div class="field">
                <div class="field-label">Subject</div>
                <div class="field-value">${subject || "N/A"}</div>
              </div>
              <div class="field">
                <div class="field-label">Message</div>
                <div class="message-box">${message.replace(/\n/g, "<br>")}</div>
              </div>
            </div>
            <div class="footer">
              Sent from OneCard Landing Page • Jinja Senior Secondary School
            </div>
          </div>
        </body>
        </html>
      `,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    console.error("Brevo API error:", errorData);
    throw new Error(errorData.message || `Brevo API error: ${response.status}`);
  }

  const data = await response.json();
  return { success: true, data };
}