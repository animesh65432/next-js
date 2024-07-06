import { z } from "zod";

export const SignUpSchemas = z.object({
  name: z
    .string()
    .min(4, { message: "Username must be at least 4 characters long" })
    .regex(/^[a-zA-Z0-9._]{3,16}$/, {
      message:
        "Username can only contain letters, numbers, underscores, and periods, and must be 3-16 characters long",
    }),

  Email: z.string().email({ message: "Email is required" }),
  Password: z.string().min(8, { message: "password sholud be greater than 8" }),
});
