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
import { registerConfig } from "@/schemas/register-schema";

export default function RegisterPage() {
  const [isLoading, setIsLoading] = React.useState(false);

  const { defaultValues, fields, schema } = registerConfig;

  const onSubmit = (values: z.infer<typeof schema>) => {
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
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">צור חשבון</h1>
          <p className="text-sm text-muted-foreground">
            הכנס את הפרטים הבאים וצור חשבון במערכת
          </p>
        </div>
        <ScrollArea className="h-[350px] w-[350px] rounded-md border p-6">
          <GenericForm
            schema={schema}
            defaultValues={defaultValues}
            onSubmit={onSubmit}
            fields={fields}
            className={"p-2"}
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
  );
}

