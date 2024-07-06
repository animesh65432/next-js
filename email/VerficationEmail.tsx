import * as React from "react";

interface EmailTemplateProps {
  Email: string;
  otp: string;
}

export function VerificationEmail({ Email, otp }: EmailTemplateProps) {
  return (
    <div>
      <h1>Welcome, {Email}!</h1>
      <p>Your verification code is: {otp}</p>
    </div>
  );
}
