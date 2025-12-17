import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface LeadPayload {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const motivoMap: Record<string, string> = {
  "dor_lombar": "Dor Lombar",
  "dor_joelho": "Dor no Joelho",
  "pos_cirurgia": "Pós-Cirurgia",
  "ergonomia": "Ergonomia / Empresas",
  "pediatria": "Fisioterapia Pediátrica",
  "regenerativa": "Fisioterapia Regenerativa",
  "outro": "Outro"
};

function formatMotivo(message: string): string {
  const match = message.match(/Motivo do Contato: (\w+)/);
  if (match && match[1]) {
    const codigo = match[1];
    return motivoMap[codigo] || codigo;
  }
  return message;
}

Deno.serve(async (req: Request) => {
  try {
    if (req.method === "OPTIONS") {
      return new Response(null, {
        status: 200,
        headers: corsHeaders,
      });
    }

    const payload: LeadPayload = await req.json();
    console.log("Received payload:", payload);

    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    const recipientEmail = Deno.env.get("RECIPIENT_EMAIL");

    console.log("Environment check:", {
      hasResendKey: !!resendApiKey,
      hasRecipientEmail: !!recipientEmail,
      recipientEmail: recipientEmail
    });

    if (!resendApiKey || !recipientEmail) {
      const error = `Missing environment variables: ${!resendApiKey ? 'RESEND_API_KEY ' : ''}${!recipientEmail ? 'RECIPIENT_EMAIL' : ''}`;
      console.error(error);
      throw new Error(error);
    }

    const motivoFormatado = formatMotivo(payload.message);

    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Arial, sans-serif; background-color: #f3f4f6;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f3f4f6; padding: 40px 20px;">
          <tr>
            <td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                
                <!-- Header -->
                <tr>
                  <td style="background: linear-gradient(135deg, #16a34a 0%, #84cc16 100%); padding: 40px 30px; text-align: center;">
                    <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">
                      🎯 Novo Lead Recebido!
                    </h1>
                    <p style="margin: 10px 0 0 0; color: #f0fdf4; font-size: 16px;">
                      Um novo paciente demonstrou interesse
                    </p>
                  </td>
                </tr>

                <!-- Content -->
                <tr>
                  <td style="padding: 40px 30px;">
                    
                    <!-- Patient Info Card -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 30px;">
                      <tr>
                        <td style="background-color: #f9fafb; border-left: 4px solid #16a34a; padding: 20px; border-radius: 8px;">
                          
                          <!-- Nome -->
                          <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 16px;">
                            <tr>
                              <td width="120" style="vertical-align: top;">
                                <span style="display: inline-block; background-color: #dcfce7; color: #166534; padding: 6px 12px; border-radius: 6px; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                                  👤 Nome
                                </span>
                              </td>
                              <td style="vertical-align: top;">
                                <p style="margin: 0; color: #111827; font-size: 16px; font-weight: 600;">
                                  ${payload.name}
                                </p>
                              </td>
                            </tr>
                          </table>

                          <!-- Email -->
                          <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 16px;">
                            <tr>
                              <td width="120" style="vertical-align: top;">
                                <span style="display: inline-block; background-color: #dbeafe; color: #1e40af; padding: 6px 12px; border-radius: 6px; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                                  ✉️ Email
                                </span>
                              </td>
                              <td style="vertical-align: top;">
                                <p style="margin: 0;">
                                  <a href="mailto:${payload.email}" style="color: #2563eb; font-size: 16px; font-weight: 500; text-decoration: none;">
                                    ${payload.email}
                                  </a>
                                </p>
                              </td>
                            </tr>
                          </table>

                          <!-- Telefone -->
                          <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 16px;">
                            <tr>
                              <td width="120" style="vertical-align: top;">
                                <span style="display: inline-block; background-color: #fef3c7; color: #92400e; padding: 6px 12px; border-radius: 6px; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                                  📱 WhatsApp
                                </span>
                              </td>
                              <td style="vertical-align: top;">
                                <p style="margin: 0;">
                                  <a href="https://wa.me/${payload.phone.replace(/\D/g, '')}" style="color: #16a34a; font-size: 16px; font-weight: 600; text-decoration: none;">
                                    ${payload.phone}
                                  </a>
                                </p>
                              </td>
                            </tr>
                          </table>

                          <!-- Motivo -->
                          <table width="100%" cellpadding="0" cellspacing="0">
                            <tr>
                              <td width="120" style="vertical-align: top;">
                                <span style="display: inline-block; background-color: #fce7f3; color: #9f1239; padding: 6px 12px; border-radius: 6px; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                                  🩺 Motivo
                                </span>
                              </td>
                              <td style="vertical-align: top;">
                                <p style="margin: 0; color: #111827; font-size: 16px; font-weight: 600;">
                                  ${motivoFormatado}
                                </p>
                              </td>
                            </tr>
                          </table>

                        </td>
                      </tr>
                    </table>

                    <!-- Action Button -->
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td align="center" style="padding: 20px 0;">
                          <a href="https://wa.me/${payload.phone.replace(/\D/g, '')}" style="display: inline-block; background: linear-gradient(135deg, #16a34a 0%, #84cc16 100%); color: #ffffff; text-decoration: none; padding: 16px 40px; border-radius: 12px; font-weight: 600; font-size: 16px; box-shadow: 0 4px 6px rgba(22, 163, 74, 0.3);">
                            💬 Responder via WhatsApp
                          </a>
                        </td>
                      </tr>
                    </table>

                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="background-color: #f9fafb; padding: 30px; text-align: center; border-top: 1px solid #e5e7eb;">
                    <p style="margin: 0; color: #6b7280; font-size: 14px; line-height: 1.6;">
                      <strong>Sistema Automatizado de Leads</strong><br>
                      Este email foi gerado automaticamente<br>
                      <span style="color: #9ca3af; font-size: 12px;">Fisioterapia em Casa - Ponta Grossa, PR</span>
                    </p>
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    console.log("Sending email to Resend API...");

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "onboarding@resend.dev",
        to: recipientEmail,
        subject: `🎯 Novo Lead: ${payload.name} - ${motivoFormatado}`,
        html: emailHtml,
      }),
    });

    console.log("Resend API response status:", response.status);

    if (!response.ok) {
      const error = await response.text();
      console.error("Resend API error:", error);
      throw new Error(`Resend API error (${response.status}): ${error}`);
    }

    const result = await response.json();
    console.log("Email sent successfully:", result);

    return new Response(JSON.stringify({ success: true, messageId: result.id }), {
      status: 200,
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error in send-lead-email function:", error);
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : "Unknown error",
        details: error instanceof Error ? error.stack : undefined
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});