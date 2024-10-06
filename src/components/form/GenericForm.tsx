import { TypeOf, z, ZodTypeAny } from "zod";
import { Path, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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
import { cn } from "@/lib/utils";
import { Icons } from "../icons";
import AvatarUpload from "../ui/avatar_upload";
import SelectForm from "../ui/select_form";

// Generic form component props interface
interface GenericFormProps<T extends ZodTypeAny> {
  className: string;
  acceptText: string;
  schema: T; // Zod schema for validation
  defaultValues: z.infer<T>; // Default values inferred from the schema
  onSubmit: (values: z.infer<T>) => void; // Submission handler
  fields: Array<{
    name: keyof z.infer<T>; // Field name from schema
    label: string; // Label for the form field
    type: HTMLInputElement["type"];
    placeholder?: string;
  }>;
  isLoading: boolean;
}

// Generic form component
export function GenericForm<T extends ZodTypeAny>({
  className,
  acceptText = "שלח",
  schema,
  defaultValues,
  onSubmit,
  fields,
  isLoading,
  ...props
}: GenericFormProps<T>) {
  const form = useForm<z.infer<T>>({
    resolver: zodResolver(schema), // Using Zod schema for validation
    defaultValues,
  });

  return (
    <Form {...form}>
      <div className={cn("grid gap-6", className)} {...props}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          {fields.map((field, index) => (
            <FormField
              key={index}
              control={form.control}
              name={field.name as Path<TypeOf<T>>}
              render={({ field: controllerField }) => (
                <FormItem className="grid gap-1 mb-5 ml-1 mr-1">
                  <FormLabel>{field.label}</FormLabel>
                  <FormControl className="">
                    {field.type === "textarea" ? (
                      <Textarea
                        placeholder={field.placeholder}
                        {...controllerField}
                      />
                    ) : field.type === "text" ? (
                      <Input
                        placeholder={field.placeholder}
                        type={field.type}
                        {...controllerField}
                      />
                    ) : field.type === "file" ? (
                      <AvatarUpload />
                    ) : field.type === "select" ? (
                      <SelectForm />
                    ) : (
                      <Input
                        placeholder={field.placeholder}
                        type={field.type}
                        {...controllerField}
                      />
                    )}
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          <div className="flex justify-center">
            <Button type="submit" disabled={isLoading}>
              {isLoading && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              )}
              {acceptText}
            </Button>
          </div>
        </form>
      </div>
    </Form>
  );
}

