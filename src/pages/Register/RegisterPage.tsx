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

export default function RegisterPage() {
  const [isLoading, setIsLoading] = React.useState(false);

  const contactSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email"),
    message: z.string().min(1, "Message is required"),
  });

  const onSubmit = (values: z.infer<typeof contactSchema>) => {
    toast({
      title: "Form submitted successfully!",
      description: JSON.stringify(values),
    });
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
          <GenericForm
            schema={contactSchema}
            defaultValues={{ name: "", email: "", message: "" }}
            onSubmit={onSubmit}
            fields={[
              { name: "name", label: "Name", type: "text" },
              { name: "email", label: "Email", type: "email" },
              { name: "message", label: "Message", type: "textarea" },
              { name: "message", label: "Message", type: "textarea" },
            ]}
          />
          {/* <div className="grid grid-cols-2 gap-1">
            <Input
              id="first_name"
              type="text"
              placeholder="שם פרטי"
              autoComplete="additional-name"
            />
            <Input
              id="last_name"
              type="text"
              placeholder="שם משפחה"
              autoComplete="additional-name webauthn"
            />
          </div>
          <div className="grid gap-1">
            <Input
              id="email"
              type="email"
              placeholder="שם משתמש"
              autoComplete="email"
            />
          </div>
          <div className="grid gap-1">
            <Input
              id="email"
              type="email"
              placeholder="youre@email.com"
              autoComplete="email"
            />
          </div>
          <div className="grid gap-1">
            <Input
              id="password"
              type="password"
              placeholder="סיסמה"
              autoComplete="new-password"
            />
          </div>
          <div className="grid gap-1">
            <Input
              id="password"
              type="password"
              placeholder="חזור על הסיסמה"
              autoComplete="new-password"
            />
          </div>
          <div className="grid gap-1">
            <Input id="phone_number" type="text" placeholder="מספר טלפון" />
          </div>
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

