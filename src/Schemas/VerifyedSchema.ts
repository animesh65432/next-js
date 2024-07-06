import { z } from "zod";

export const verifycodeSchema = z.object({
  code: z
    .string()
    .length(6, { message: "verification code must be greater than 6" }),
});
