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

import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/auth";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { contactSchema } from "@/schemas/contact-schema";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@/hooks/use-toast";
import { useCreateContact } from "@/hooks/contact/useCreateContact";
import { GenericForm } from "../form/GenericForm";

export const LeftSideHeader = ({ token }: { token: string | null }) => {
  const navigate = useNavigate();
  const AddContactMutation = useCreateContact();

  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof contactSchema.schema>>({
    resolver: zodResolver(contactSchema.schema),
  });

  const onSubmit = (contactValues: z.infer<typeof contactSchema.schema>) => {
    console.log(contactValues);
    setIsLoading(true);
    AddContactMutation.mutate(contactValues, {
      onSuccess: () => {
        toast({
          title: "תודה! נחזור אליכם בהקדם!",
        });
      },
      onError: (e) => {
        console.log(e);
        toast({
          title: "ישנה תקלה במערכת. אנא נסה שנית מאוחר יותר",
        });
      },
      onSettled: () => {
        setIsLoading(false);
        form.reset();
        setIsContactDialogOpen(false);
      },
    });
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
            <GenericForm
              {...form}
              schema={contactSchema.schema}
              defaultValues={contactSchema.defaultValues}
              onSubmit={onSubmit}
              fields={[
                { name: "name", label: "שם", type: "text" },
                { name: "email", label: "דואר אלקטרוני", type: "email" },
                { name: "title", label: "כותרת", type: "text" },
                { name: "messageBody", label: "גוף ההודעה", type: "textarea" },
              ]}
              acceptText="שלח"
              isLoading={isLoading}
            />
          </div>
          <DialogFooter className="sm:justify-start"></DialogFooter>
        </DialogContent>
      </Dialog>
      <ModeToggle />
    </div>
  );
};

