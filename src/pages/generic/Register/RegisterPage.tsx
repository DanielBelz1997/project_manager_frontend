import { GenericForm } from "@/components/form/GenericForm";
import { Link } from "react-router-dom";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

import React from "react";
import { toast } from "@/hooks/use-toast";
import { z } from "zod";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function RegisterPage() {
  const [isLoading, setIsLoading] = React.useState(false);

  const contactSchema = z
    .object({
      first_name: z.string().min(1, "first name is required"),
      last_name: z.string().min(1, "last name is required"),
      username: z.string().min(1, "username is required"),
      email: z.string().email("Invalid email"),
      password: z.string().min(8, "make me stronger!"),
      repeat_password: z.string(),
      phone_number: z.string().length(10, "phone number is required"),
      group: z.string().min(1, "Please select group"),
      avatar: z.instanceof(File).nullable(),
    })
    .refine((data) => data.password === data.repeat_password, {
      path: ["repeat_password"],
      message: "please make them match",
    });

  const onSubmit = (values: z.infer<typeof contactSchema>) => {
    setIsLoading(true);

    toast({
      title: "Form submitted successfully!",
      description: JSON.stringify(values),
    });

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  return (
    <div className="min-h-full flex justify-center items-center">
      <div className="lg:p-8 flex justify-center">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">צור חשבון</h1>
            <p className="text-sm text-muted-foreground">
              הכנס את הפרטים הבאים וצור חשבון במערכת
            </p>
          </div>
          <ScrollArea className="h-[350px] w-[350px] rounded-md border p-6">
            <GenericForm
              schema={contactSchema}
              defaultValues={{
                first_name: "",
                last_name: "",
                username: "",
                email: "",
                password: "",
                repeat_password: "",
                phone_number: "",
                avatar: null,
                group: "כללי",
              }}
              onSubmit={onSubmit}
              fields={[
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
                { name: "group", label: "שייכות לקבוצה", type: "select" },
                { name: "avatar", label: "תמונת פרופיל", type: "file" },
              ]}
              className={""}
              acceptText={"הרשם"}
              isLoading={isLoading}
            />
          </ScrollArea>
          {/*
            />
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select a verified email to display" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="m@example.com">m@example.com</SelectItem>
              <SelectItem value="m@google.com">m@google.com</SelectItem>
              <SelectItem value="m@support.com">m@support.com</SelectItem>
            </SelectContent>
          </Select> */}
          <p className="px-8 text-center text-sm text-muted-foreground">
            בלחיצה על הרשם, אתה מצהיר על{" "}
            <Link
              to="/"
              className="underline underline-offset-4 hover:text-primary">
              תנאי השירות
            </Link>{" "}
            ועל{" "}
            <Link
              to="/"
              className="underline underline-offset-4 hover:text-primary">
              מדיניות פרטיות
            </Link>
          </p>
          <p className="px-8 text-center text-sm text-muted-foreground">
            רשום במערכת?{" "}
            <Link
              to="/login"
              className="underline underline-offset-4 hover:text-primary">
              התחבר
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

