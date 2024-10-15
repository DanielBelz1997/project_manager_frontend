import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@/hooks/use-toast";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { TypographyP } from "@/components/ui/typography";
import { ModeToggle } from "@/components/theme/mode_toggle";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { formSchema } from "@/schemas/form-schema";
import app_logo from "@/assets/services/app_logo.png";
import { useNavigate } from "react-router-dom";
import React from "react";

export function Header() {
  const [loggedIn, setLoggedIn] = React.useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      title: "",
      body: "",
    },
  });

  const navigate = useNavigate();

  const onSubmit = (/* values: z.infer<typeof formSchema> */) => {
    toast({
      title: "תודה! נחזור אליכם בהקדם!",
    });

    form.reset();
  };

  return (
    <header className="w-full h-[10vh] flex justify-between p-5 items-center">
      <div className="flex justify-start">
        <img
          src={app_logo}
          onClick={() => navigate("/")}
          className="w-14 cursor-pointer"
        />
        {loggedIn ? (
          <div className="flex justify-start">
            <TypographyP
              onClick={() => navigate("/myRequests")}
              className="mr-9 cursor-pointer mt-5">
              הבקשות שלי
            </TypographyP>
            <Button className="mr-6 mt-2.5">בקשה חדשה</Button>
          </div>
        ) : (
          <Button
            className="mr-6 mt-2.5"
            variant="outline"
            onClick={() => navigate("/login")}>
            התחבר
          </Button>
        )}
      </div>
      <div className="flex justify-start">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="ml-6">
              צור קשר
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="flex justify-start mt-5">
                צור קשר
              </DialogTitle>
              <DialogDescription className="text-right pt-1">
                יש לכם משהו לומר לנו? כתבו לנו ונחזור אליכם בהקדם!
              </DialogDescription>
            </DialogHeader>
            <div>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <div className="grid grid-cols-2 gap-8 text-right mb-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>שם</FormLabel>
                          <FormControl>
                            <Input className="text-right" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>דואר אלקטרוני</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="email"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid grid-cols-1 gap-4 text-right mb-4">
                    <FormField
                      control={form.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-right">כותרת</FormLabel>
                          <FormControl>
                            <Input className="text-right" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="body"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>גוף ההודעה</FormLabel>
                          <FormControl>
                            <Textarea
                              className="min-h-[130px] resize-none text-right"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex justify-end ">
                    <DialogClose>
                      <Button type="submit">שלח</Button>
                    </DialogClose>
                  </div>
                </form>
              </Form>
            </div>
            <DialogFooter className="sm:justify-start"></DialogFooter>
          </DialogContent>
        </Dialog>
        <ModeToggle />
      </div>
    </header>
  );
}

export default Header;

