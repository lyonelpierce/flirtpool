"use client";

import { useState } from "react";
import {
  Sheet,
  SheetTitle,
  SheetContent,
  SheetHeader,
  SheetDescription,
} from "./ui/sheet";
import { cn } from "@/lib/utils";
import {
  CheckIcon,
  ChevronDown,
  ChevronUp,
  ImageIcon,
  XIcon,
} from "lucide-react";

const ProfileDrawer = () => {
  const [expanded, isExpanded] = useState<boolean>(false);

  return (
    <Sheet open modal={false}>
      <SheetContent
        side="bottom"
        className={cn(
          "flex flex-col w-full h-[25vh] border border-gray-300 rounded-2xl transition-all ease-in-out duration-300 [&>button]:hidden",
          !expanded ? "h-[25vh]" : "h-[65vh]"
        )}
        onInteractOutside={() => isExpanded(false)}
      >
        <div className="flex items-center justify-center w-full transition-all ease-in-out duration-300">
          {!expanded ? (
            <ChevronUp onClick={() => isExpanded(true)} />
          ) : (
            <ChevronDown onClick={() => isExpanded(false)} />
          )}
        </div>
        <SheetHeader className="flex items-start justify-start">
          <div className="flex justify-between items-center w-full">
            <SheetTitle className="text-2xl font-semibold">
              User Profile
            </SheetTitle>
            <div className="flex justify-around gap-2">
              <XIcon
                className="size-12 text-red-600 border-2 border-gray-503 rounded-full p-2"
                strokeWidth={4}
              />
              <CheckIcon
                className="size-12 text-green-600 border-2 border-gray-300 rounded-full p-2"
                strokeWidth={4}
              />
            </div>
          </div>
          <SheetDescription className="text-base text-start line-clamp-3">
            User profile description, this is a long description test to see if
            line clamp is working
          </SheetDescription>
        </SheetHeader>
        <div className="grid grid-cols-3 gap-3">
          <div className="aspect-[4/5] bg-gray-100 flex items-center justify-center">
            <ImageIcon className="size-16 text-black" strokeWidth={1.2} />
          </div>
          <div className="aspect-[4/5] bg-gray-100 flex items-center justify-center">
            <ImageIcon className="size-16 text-black" strokeWidth={1.2} />
          </div>
          <div className="aspect-[4/5] bg-gray-100 flex items-center justify-center">
            <ImageIcon className="size-16 text-black" strokeWidth={1.2} />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col">
            <p className="font-semibold">About</p>
            <p className="text-gray-500 font-medium text-sm">About text...</p>
          </div>
          <div className="flex flex-col">
            <p className="font-semibold">Hobbies</p>
            <p className="text-gray-500 font-medium text-sm">Hobbies text...</p>
          </div>
          <div className="flex flex-col">
            <p className="font-semibold">Job</p>
            <p className="text-gray-500 font-medium text-sm">Job text...</p>
          </div>
          <div className="flex flex-col">
            <p className="font-semibold">Relationship Goals</p>
            <p className="text-gray-500 font-medium text-sm">Goals text...</p>
          </div>
          <div className="flex flex-col">
            <p className="font-semibold">Favorite Song</p>
            <p className="text-gray-500 font-medium text-sm">
              Fav song text...
            </p>
          </div>
          <div className="flex flex-col">
            <p className="font-semibold">Location</p>
            <p className="text-gray-500 font-medium text-sm">
              Location text...
            </p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ProfileDrawer;
