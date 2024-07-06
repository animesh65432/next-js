import { z } from "zod";

export const SigninSchemas = z.object({
  Email: z.string().email({ message: "Email is required" }),
  Password: z.string().min(8, { message: "password sholud be greater than 8" }),
});
