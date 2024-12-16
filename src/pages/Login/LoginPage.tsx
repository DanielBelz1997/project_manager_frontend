import { GenericForm } from "@/components/form/GenericForm";
import React from "react";
import { Link } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import { z } from "zod";
import { useLogin } from "@/hooks/useLogin";
import { useAuthStore } from "@/store/auth";
import { useNavigate } from "react-router-dom";
import { loginConfig } from "@/schemas/login-schema";

export default function LoginPage() {
  const [isLoading, setIsLoading] = React.useState(false);

  const loginMutation = useLogin();
  const navigate = useNavigate();

  const { setRole, setUsername, setToken } = useAuthStore();
  const { defaultValues, fields, schema } = loginConfig;

  const onSubmit = (values: z.infer<typeof schema>) => {
    setIsLoading(true);

    loginMutation.mutate(
      { email: values.email, password: values.password },
      {
        onSuccess: (data) => {
          console.log(data);
          if (data?.access_token) {
            setToken(data.access_token);
            setUsername(data.username);
            setRole(data.role);

            navigate(data.role === 1 ? "/admin" : "/");

            toast({
              title: "התגעגענו!",
              description: "עכשיו תוכל לבצע פעולות במערכת",
            });
          } else {
            toast({
              title: "login failed",
              description: "wrong password or email. please try again",
            });
          }
        },
        onError: (e) => {
          if (e instanceof Error)
            toast({ title: "login failed", description: e.message });
        },
        onSettled: () => {
          setIsLoading(false);
        },
      }
    );

    setTimeout(() => {}, 3000);
  };

  return (
    <div className="min-h-full flex justify-center items-center">
      <div className="lg:p-8 flex justify-center">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">התחבר</h1>
          </div>
          <GenericForm
            schema={schema}
            defaultValues={defaultValues}
            onSubmit={onSubmit}
            fields={fields}
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

