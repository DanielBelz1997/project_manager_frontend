import { ModeToggle } from "../../components/theme/mode_toggle";
import app_logo from "../../assets/services/app_logo.png";
import { Button } from "@/components/ui/button";
import { TypographyP } from "@/components/ui/typography";

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
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export function Header() {
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
              <DialogTitle className="flex justify-end m-5">
                צור קשר
              </DialogTitle>
              <DialogDescription>
                יש לכם משהו לומר לנו? אנא צרו איתנו קשר ונחזור אליכם בהקדם!
              </DialogDescription>
            </DialogHeader>
            <div className="flex items-center space-x-2">
              <div className="grid flex-1 gap-2">
                <Label htmlFor="link" className="sr-only">
                  Link
                </Label>
                <Input
                  id="link"
                  defaultValue="https://ui.shadcn.com/docs/installation"
                  readOnly
                />
              </div>
            </div>
            <DialogFooter className="sm:justify-start">
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  סגור
                </Button>
              </DialogClose>
            </DialogFooter>
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
