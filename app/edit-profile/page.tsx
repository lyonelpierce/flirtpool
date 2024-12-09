import { ImageIcon } from "lucide-react";
import EditProfileForm from "@/components/EditProfileForm";

const EditProfilePage = () => {
  return (
    <div className="flex flex-col h-full p-4 gap-4">
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

      <h2 className="text-2xl font-semibold">Name - Last Name</h2>

      <EditProfileForm />
    </div>
  );
};

export default EditProfilePage;
