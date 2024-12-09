import Logo from "@/components/ui/logo";
import { cn } from "@/lib/utils";
import SettingsMenu from "@/components/SettingsMenu";
import { MessageCircleIcon } from "lucide-react";

const Header = ({ isAndroid }: { isAndroid: boolean }) => {
  return (
    <header
      className={cn(
        "fixed top-0 left-0 flex justify-between px-4 items-center h-16 bg-white z-10 border-b border-gray-300 w-full",
        isAndroid && "py-10"
      )}
    >
      <SettingsMenu />
      <Logo />
      <MessageCircleIcon />
    </header>
  );
};

export default Header;
