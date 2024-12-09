"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useState } from "react";
import { MenuIcon } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import Link from "next/link";

const settingsMenu = [
  {
    label: "Match preferences",
    url: "#",
  },
  {
    label: "Edit Profile",
    url: "#",
  },
  {
    label: "Leaderboard",
    url: "# ",
  },
];

const SettingsMenu = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <MenuIcon onClick={handleOpen} />
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left">
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
