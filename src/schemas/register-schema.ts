import { CostumeSchemaType } from "@/types/form";
import { z } from "zod";

const registerSchema = z
  .object({
    first_name: z.string().min(1, "first name is required"),
    last_name: z.string().min(1, "last name is required"),
    username: z.string().min(1, "username is required"),
    email: z.string().email("Invalid email"),
    password: z.string().min(8, "make me stronger!"),
    repeat_password: z.string(),
    phone_number: z.string().length(10, "phone number is required"),
    avatar: z.instanceof(File).nullable(),
  })
  .refine((data) => data.password === data.repeat_password, {
    path: ["repeat_password"],
    message: "please make them match",
  });

export const registerConfig: CostumeSchemaType<typeof registerSchema> = {
  schema: registerSchema,
  defaultValues: {
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    repeat_password: "",
    phone_number: "",
    avatar: null,
  },
  fields: [
    { name: "first_name", label: "שם פרטי", type: "text" },
    { name: "last_name", label: "שם משפחה", type: "text" },
    {
      name: "username",
      label: "שם משתמש",
      type: "text",
      placeholder: "תוצג במערכת בשם זה",
    },
    {
      name: "email",
      label: "אימייל",
      type: "email",
      placeholder: "youre@email.com",
    },
    {
      name: "password",
      label: "סיסמה",
      type: "password",
    },
    {
      name: "repeat_password",
      label: "חזור על הסיסמה",
      type: "password",
    },
    { name: "phone_number", label: "מספר טלפון", type: "text" },
    { name: "avatar", label: "תמונת פרופיל", type: "file" },
  ],
};
