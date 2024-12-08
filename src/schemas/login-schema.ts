import { LoginSchema } from "@/types/form";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email("email is required"),
  password: z.string().min(8, "make me stronger!"),
});

export const loginConfig: LoginSchema<typeof loginSchema> = {
  schema: loginSchema,
  defaultValues: {
    email: "",
    password: "",
  },
  fields: [
    {
      name: "email",
      label: "אימייל",
      type: "text",
    },
    {
      name: "password",
      label: "סיסמה",
      type: "password",
    },
  ],
};
