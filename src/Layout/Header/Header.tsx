import { ModeToggle } from "../../components/theme/mode_toggle";
import app_logo from "../../assets/app_logo.png";

export function Header() {
  return (
    <header className="w-full h-[8vh] flex justify-around items-center ">
      <img src={app_logo} className="w-12 " />
      <ModeToggle />
    </header>
  );
}

export default Header;
