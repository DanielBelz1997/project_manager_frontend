import { ModeToggle } from "../../components/theme/mode_toggle";
import app_logo from "../../assets/services/app_logo.png";
import { Button } from "@/components/ui/button";
import { TypographyP } from "@/components/ui/typography";

export function Header() {
  return (
    <header className="w-full h-[8vh] flex justify-between p-5 items-center">
      <ModeToggle />
      <div className="flex justify-start ">
        <Button className="mr-9">בקשה חדשה</Button>
        <TypographyP className="mr-9">הבקשות שלי</TypographyP>
        <img src={app_logo} className="w-8" />
      </div>
    </header>
  );
}

export default Header;
