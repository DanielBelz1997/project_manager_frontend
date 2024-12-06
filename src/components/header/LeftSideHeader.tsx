import { ModeToggle } from "../theme/mode_toggle";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/auth";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { formSchema } from "@/schemas/form-schema";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@/hooks/use-toast";

export const LeftSideHeader = ({ token }: { token: string | null }) => {
  const navigate = useNavigate();

  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      title: "",
      body: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast({
      title: "תודה! נחזור אליכם בהקדם!",
    });

    form.reset();
    setIsContactDialogOpen(false);
  };

  return (
    <div className="flex justify-start">
      {token ? (
        <Button
          className="ml-6 "
          variant="destructive"
          onClick={() => {
            useAuthStore.getState().clearLogin();
            navigate("/login");
          }}>
          התנתק
        </Button>
      ) : null}
      <Dialog open={isContactDialogOpen} onOpenChange={setIsContactDialogOpen}>
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
                          <Input type="email" placeholder="email" {...field} />
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
                  <Button type="submit">שלח</Button>
                </div>
              </form>
            </Form>
          </div>
          <DialogFooter className="sm:justify-start"></DialogFooter>
        </DialogContent>
      </Dialog>
      <ModeToggle />
    </div>
  );
};
