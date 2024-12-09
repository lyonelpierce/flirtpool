import { MessageCircleIcon } from "lucide-react";
import Logo from "./ui/logo";
import SettingsMenu from "./SettingsMenu";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 flex justify-between px-4 items-center h-16 bg-white z-10 border-b border-gray-300 w-full">
      <SettingsMenu />
      <Logo />
      <MessageCircleIcon />
    </header>
  );
};

export default Header;
