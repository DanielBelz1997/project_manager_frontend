import { GenericForm } from "@/components/form/GenericForm"
import { Input } from "@/components/ui/input";
import React from "react";
import { Link } from "react-router-dom"

export default function LoginPage() {
  const [isLoading, setIsLoading] = React.useState(false)

  async function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)

    // simulate a network request
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }


  return (
    <div className="min-h-full flex justify-center items-center">
      <div className="lg:p-8 flex justify-center">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              התחבר
            </h1>
            <p className="text-sm text-muted-foreground">
              הכנס כתובת מייל וסיסמה והתחבר למערכת
            </p>
          </div>
          <GenericForm onSubmit={handleSubmit} isLoading={isLoading} buttonText='התחבר' >
            <div className="grid gap-1">
              <Input id="email" type="email" placeholder="name@example.com" autoComplete="email" />
            </div>
            <div className="grid gap-1">
              <Input id="password" type="password" placeholder="Password" autoComplete="new-password" />
            </div>
          </GenericForm>
          <p className="px-8 text-center text-sm text-muted-foreground">
            לא רשום במערכת? {" "}
            <Link
              to='/register'
              className="underline underline-offset-4 hover:text-primary"
            >
              הרשם
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}