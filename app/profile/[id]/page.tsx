import Image from "next/image";
import ProfileDrawer from "@/components/ProfileDrawer";

const ProfilePage = () => {
  return (
    <div className="flex flex-col h-full gap-4">
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
