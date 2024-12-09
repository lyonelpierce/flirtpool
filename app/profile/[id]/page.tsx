import ProfileDrawer from "@/components/ProfileDrawer";
import { ImageIcon } from "lucide-react";
import React from "react";

const ProfilePage = () => {
  return (
    <div className="flex flex-col h-full gap-4">
      <div className="bg-gray-100 h-[75vh] flex items-center justify-center">
        <ImageIcon className="size-32 text-black" strokeWidth={1.2} />
      </div>
      <ProfileDrawer />
    </div>
  );
};

export default ProfilePage;
