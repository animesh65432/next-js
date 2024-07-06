import { z } from "zod";

export const MessageSchemas = z.object({
  content: z
    .string()
    .min(10, { message: "content must be 10 char" })
    .max(300, { message: "message content greater than 300" }),
});
