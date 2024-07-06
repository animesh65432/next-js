import { resend } from "@/lib/resend";
import { ApiResponse } from "@/type/ApiResponse";
import { VerificationEmail } from "../../email/VerficationEmail";

export async function sendVerificationEmail(
  email: string,
  verifyCode: string
): Promise<ApiResponse> {
  try {
    await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: email,
      subject: "Verification code",
      react: VerificationEmail({ email, otp: verifyCode }),
    });

    return { success: true, message: "Verification email sent successfully" };
  } catch (error) {
    console.error("Error while sending email:", error);
    return { success: false, message: "Error while sending email" };
  }
}
