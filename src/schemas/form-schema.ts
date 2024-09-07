import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email().optional(),
  title: z.string().min(3).optional(),
  body: z.string().min(2).max(100).optional(),
});
