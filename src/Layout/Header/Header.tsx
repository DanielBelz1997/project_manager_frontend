import { ModeToggle } from "../../components/theme/mode_toggle";
import app_logo from "../../assets/services/app_logo.png";
import { Button } from "@/components/ui/button";
import { TypographyP } from "@/components/ui/typography";
import { formSchema } from "@/schemas/form-schema";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export function Header() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "belzdaniel6@gmail.com",
      title: "daniel",
      body: "daniel",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // ✅ This will be type-safe and validated.
    console.log(values);
  };

  return (
    <header className="w-full h-[8vh] flex justify-between p-5 items-center">
      <div className="flex justify-start">
        <ModeToggle />
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="ml-6">
              צור קשר
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="flex justify-end mt-5">
                צור קשר
              </DialogTitle>
              <DialogDescription className="text-right pt-1">
                !יש לכם משהו לומר לנו? אנא צרו איתנו קשר ונחזור אליכם בהקדם
              </DialogDescription>
            </DialogHeader>
            <div>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="grid grid-cols-2 gap-8 text-right">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>שם</FormLabel>
                        <FormControl>
                          <Input
                            className="text-right"
                            placeholder="name"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription className="text-right">
                          .זה השם שיוצג אצלינו במערכת
                        </FormDescription>
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
                          <Input placeholder="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit">שלח</Button>
                  {/* <DialogClose asChild>
                    <Button type="button" variant="secondary">
                      סגור
                    </Button>
                  </DialogClose> */}
                </form>
              </Form>
            </div>
            <DialogFooter className="sm:justify-start"></DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className="flex justify-start ">
        <Button className="mr-6">בקשה חדשה</Button>
        <TypographyP className="mr-9">הבקשות שלי</TypographyP>
        <img src={app_logo} className="w-8" />
      </div>
    </header>
  );
}

export default Header;
