import { ModeToggle } from "../../components/theme/mode_toggle";
import app_logo from "../../assets/app_logo.png";

export function Header() {
  return (
    <header className="w-full h-[8vh] flex justify-between p-5 items-center ">
      <img src={app_logo} className="w-8" />
      <ModeToggle />
    </header>
  );
}

export default Header;
