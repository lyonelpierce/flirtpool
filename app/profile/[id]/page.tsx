import ProfileDrawer from "@/components/ProfileDrawer";
import Image from "next/image";
// import { ImageIcon } from "lucide-react";

const ProfilePage = () => {
  return (
    <div className="flex flex-col h-full gap-4">
      {/* <div className="bg-gray-100 h-[75vh] flex items-center justify-center">
        <ImageIcon className="size-32 text-black" strokeWidth={1.2} />
      </div> */}
      <Image
        src="https://github.com/shadcn.png"
        alt="Placeholder image"
        fill
        className="object-cover"
      />
      <ProfileDrawer />
    </div>
  );
};

export default ProfilePage;
