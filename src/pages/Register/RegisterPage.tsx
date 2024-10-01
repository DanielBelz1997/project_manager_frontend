import { GenericForm } from "@/components/form/GenericForm";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

export const metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default function RegisterPage() {
  return (
    <div className="min-h-full flex justify-center items-center">
      <div className="lg:p-8 flex justify-center">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">צור חשבון</h1>
            <p className="text-sm text-muted-foreground">
              הכנס כתובת מייל וסיסמה וצור חשבון במערכת
            </p>
          </div>
          <GenericForm buttonText="הרשם">
            <div className="grid gap-1">
              <Input
                id="first_name"
                type=""
                placeholder="name@example.com"
                autoComplete="email"
              />
            </div>
            <div className="grid gap-1">
              <Input
                id="password"
                type="password"
                placeholder="Password"
                autoComplete="new-password"
              />
            </div>
          </GenericForm>
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

