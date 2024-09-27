import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { UserAuthForm } from "@/components/login/user-auth-form"
import { Link } from "react-router-dom"

export const metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
}


export default function LoginPage() {
  return (
    <div className="min-h-full flex justify-center items-center">
      <div className="lg:p-8 flex justify-center">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              צור חשבון
            </h1>
            <p className="text-sm text-muted-foreground">
              הכנס כתובת מייל וצור חשבון במערכת
            </p>
          </div>
          <UserAuthForm />
          <p className="px-8 text-center text-sm text-muted-foreground">
            בלחיצה על המשך, אתה מצהיר על {" "}
            <Link
              to="/"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              to="/"
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}