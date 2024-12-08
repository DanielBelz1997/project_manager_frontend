import { z, ZodType } from "zod";

type Field<TSchema extends ZodType> = {
  name: keyof z.infer<TSchema>;
  label: string;
  type: string;
};

export type LoginSchema<TSchema extends ZodType> = {
  schema: TSchema;
  defaultValues: z.infer<TSchema>;
  fields: Field<TSchema>[];
};
