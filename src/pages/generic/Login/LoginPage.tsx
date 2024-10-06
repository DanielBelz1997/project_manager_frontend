import { GenericForm } from "@/components/form/GenericForm";
import React from "react";
import { Link } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import { z } from "zod";

export default function LoginPage() {
  const [isLoading, setIsLoading] = React.useState(false);

  const contactSchema = z.object({
    username: z.string().min(1, "username is required"),
    password: z.string().min(8, "make me stronger!"),
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
            <h1 className="text-2xl font-semibold tracking-tight">התחבר</h1>
          </div>
          <GenericForm
            schema={contactSchema}
            defaultValues={{
              username: "",
              password: "",
            }}
            onSubmit={onSubmit}
            fields={[
              {
                name: "username",
                label: "שם משתמש",
                type: "text",
              },
              {
                name: "password",
                label: "סיסמה",
                type: "password",
              },
            ]}
            className={""}
            acceptText={"התחבר"}
            isLoading={isLoading}
          />
          <p className="px-8 text-center text-sm text-muted-foreground">
            לא רשום במערכת?{" "}
            <Link
              to="/register"
              className="underline underline-offset-4 hover:text-primary">
              הרשם
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

