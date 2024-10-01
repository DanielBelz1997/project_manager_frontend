import * as React from "react";
import { TypeOf, z, ZodTypeAny } from "zod";
import { Path, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// import { toast } from "@/hooks/use-toast";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// Generic form component props interface
interface GenericFormProps<T extends ZodTypeAny> {
  schema: T; // Zod schema for validation
  defaultValues: z.infer<T>; // Default values inferred from the schema
  onSubmit: (values: z.infer<T>) => void; // Submission handler
  fields: Array<{
    name: keyof z.infer<T>; // Field name from schema
    label: string; // Label for the form field
    type: "text" | "email" | "textarea"; // Type of the input field
  }>;
}

// Generic form component
export function GenericForm<T extends ZodTypeAny>({
  schema,
  defaultValues,
  onSubmit,
  fields,
}: GenericFormProps<T>) {
  const form = useForm<z.infer<T>>({
    resolver: zodResolver(schema), // Using Zod schema for validation
    defaultValues,
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {fields.map((field, index) => (
          <FormField
            key={index}
            control={form.control}
            name={field.name as Path<TypeOf<T>>}
            render={({ field: controllerField }) => (
              <FormItem>
                <FormLabel>{field.label}</FormLabel>
                <FormControl>
                  {field.type === "textarea" ? (
                    <Textarea {...controllerField} />
                  ) : (
                    <Input type={field.type} {...controllerField} />
                  )}
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

