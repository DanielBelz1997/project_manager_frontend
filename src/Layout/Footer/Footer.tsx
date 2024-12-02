import { Separator } from "@/components/ui/separator";
import { useLocation } from "react-router-dom";

export function Footer() {
  const location = useLocation();
  return location.pathname !== "/admin" ? (
    <>
      <Separator />
      <footer className="w-full flex justify-center items-center">
        &copy; כל הזכויות שמורות
      </footer>
    </>
  ) : (
    <></>
  );
}

export default Footer;

