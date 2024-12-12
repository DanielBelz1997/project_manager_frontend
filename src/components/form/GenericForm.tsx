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
  className?: string;
  acceptText: string;
  schema: T; // Zod schema for validation
  defaultValues: z.infer<T>; // Default values inferred from the schema
  onSubmit: (values: z.infer<T>) => void; // Submission handler
  fields: Array<{
    name: keyof z.infer<T>; // Field name from schema
    label: string; // Label for the form field
    type: HTMLInputElement["type"];
    placeholder?: string;
    fieldClassName?: string;
    group?: string;
  }>;
  isLoading: boolean;
}

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

  const groupedFields = fields.reduce<
    Record<string, Array<(typeof fields)[0]>>
  >((acc, field) => {
    if (field.group) {
      acc[field.group] = acc[field.group] || [];
      acc[field.group].push(field);
    } else {
      acc.__ungrouped = acc.__ungrouped || [];
      acc.__ungrouped.push(field);
    }
    return acc;
  }, {});

  type FieldType = Array<(typeof fields)[0]>;

  const getGridClass = (length: number) => {
    if (length <= 1) return "grid-cols-1";
    if (length <= 2) return "grid-cols-2";
    if (length <= 3) return "grid-cols-3";
    if (length <= 4) return "grid-cols-4";
    if (length <= 5) return "grid-cols-5";
    if (length <= 6) return "grid-cols-6";
    if (length <= 7) return "grid-cols-7";
    if (length <= 8) return "grid-cols-8";
    return "grid-cols-9"; // Use up to 9 columns
  };

  const renderGroup = (groupName: string, fields: FieldType) => {
    const gridClass = getGridClass(fields.length);

    return (
      <div key={groupName} className={`grid ${gridClass} gap-4 mb-6`}>
        {fields.map((field, index) => (
          <FormField
            key={index}
            control={form.control}
            name={field.name as Path<TypeOf<T>>}
            render={({ field: controllerField }) => (
              <FormItem className="grid gap-1">
                <FormLabel>{field.label}</FormLabel>
                <FormControl>
                  {field.type === "textarea" ? (
                    <Textarea
                      className={field.fieldClassName}
                      placeholder={field.placeholder}
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
      </div>
    );
  };

  return (
    <Form {...form}>
      <div className={cn("grid gap-6", className)} {...props}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          {Object.entries(groupedFields).map(([groupName, groupFields]) =>
            groupName === "__ungrouped"
              ? groupFields.map((field, index) =>
                  renderGroup(`ungrouped-${index}`, [field])
                )
              : renderGroup(groupName, groupFields)
          )}
          <div className="flex justify-center">
            <Button type="submit" disabled={isLoading}>
              {acceptText}
              {isLoading && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              )}
            </Button>
          </div>
        </form>
      </div>
    </Form>
  );
}

