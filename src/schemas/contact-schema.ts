import { z } from "zod";

export const contactSchema = {
  schema: z.object({
    name: z.string().min(2).max(50),
    email: z.string().email(),
    title: z.string().min(3),
    messageBody: z.string().min(2).max(100),
  }),

  defaultValues: {
    name: "",
    email: "",
    title: "",
    messageBody: "",
  },
};

