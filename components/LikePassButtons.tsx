import { CheckIcon, XIcon } from "lucide-react";

const LikePassButtons = () => {
  return (
    <div className="flex justify-around w-full">
      <div className="flex flex-col gap-1">
        <XIcon
          className="size-16 text-red-600 border-2 border-gray-503 rounded-full p-2"
          strokeWidth={4}
        />
        <p className="text-red-600 text-center font-medium text-xs">%</p>
      </div>
      <div className="flex flex-col gap-1">
        <CheckIcon
          className="size-16 text-green-600 border-2 border-gray-300 rounded-full p-2"
          strokeWidth={4}
        />
        <p className="text-green-600 text-center font-medium text-xs">%</p>
      </div>
    </div>
  );
};

export default LikePassButtons;
