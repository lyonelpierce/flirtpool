"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useState } from "react";
import { ChevronLeftIcon, MenuIcon } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const settingsMenu = [
  {
    label: "Match preferences",
    url: "/match-preferences",
  },
  {
    label: "Edit Profile",
    url: "/edit-profile",
  },
  {
    label: "Leaderboard",
    url: "/leaderboard",
  },
];

const SettingsMenu = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    if (pathname !== "/") {
      router.push("/");
      return;
    }

    setOpen(true);
  };

  const pathname = usePathname();
  const router = useRouter();

  return (
    <>
      {pathname !== "/" ? (
        <ChevronLeftIcon onClick={handleOpen} />
      ) : (
        <MenuIcon onClick={handleOpen} />
      )}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="z-[60]">
          <SheetHeader className="items-start">
            <SheetTitle>Settings</SheetTitle>
            <VisuallyHidden>
              <SheetDescription>Settings Menu</SheetDescription>
            </VisuallyHidden>
          </SheetHeader>
          <div className="flex flex-col gap-5 mt-5">
            {settingsMenu.map((item) => (
              <Link
                key={item.label}
                href={item.url}
                className="font-medium text-gray-700"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default SettingsMenu;
