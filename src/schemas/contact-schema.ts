import { z } from "zod";

export const contactSchema = {
  schema: z.object({
    name: z.string().min(2).max(50),
    email: z.string().email().optional(),
    title: z.string().min(3).optional(),
    messageBody: z.string().min(2).max(100).optional(),
  }),

  defaultValues: {
    name: "",
    email: "",
    title: "",
    messageBody: "",
  },
};
