import { z } from "zod";

const schema = z.object({
  email: z.string().email("email is required"),
  password: z.string().min(8, "make me stronger!"),
});

type Field = {
  name: keyof z.infer<typeof schema>;
  label: string;
  type: string;
};

type LoginSchema = {
  schema: typeof schema; // Type of the Zod schema
  defaultValues: z.infer<typeof schema>; // Infer the default values from the schema
  fields: Field[]; // Array of fields
};

export const loginSchema: LoginSchema = {
  schema: schema,
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
