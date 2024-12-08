import { useAuthStore } from "@/store/auth";
import header_logo from "../../../public/header_logo_dark.svg";
import { LeftSideHeader } from "@/components/header/LeftSideHeader";
import { RightSideHeader } from "@/components/header/RightSideHeader";

export function Header() {
  const token = useAuthStore((state) => state.token);
  const username = useAuthStore((state) => state.username);
  const role = useAuthStore((state) => state.role);

  return (
    <header className="w-full h-[10vh] flex justify-between p-5 items-center">
      <RightSideHeader
        header_logo={header_logo}
        token={token}
        username={username}
        role={role}
      />
      <LeftSideHeader token={token} />
    </header>
  );
}

export default Header;

