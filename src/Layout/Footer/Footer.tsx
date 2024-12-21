import { Separator } from "@/components/ui/separator";
import { useLocation } from "react-router-dom";

export function Footer() {
  const location = useLocation();
  return location.pathname !== "/admin" ? (
    <footer className="text-center">
      <Separator />
      <p>&copy; כל הזכויות שמורות</p>
    </footer>
  ) : (
    <></>
  );
}

export default Footer;

