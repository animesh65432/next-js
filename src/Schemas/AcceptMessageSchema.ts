import { z } from "zod";

export const AcceptSchemas = z.object({
  acceptingmessage: z.boolean(),
});
