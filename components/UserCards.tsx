import { ImageIcon, XIcon } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import MatchModal from "./MatchModal";
import Link from "next/link";

const UserCards = () => {
  return (
    <Card className="flex flex-1 flex-col items-center justify-between w-full h-[calc(100vh-176px)] overflow-hidden border-none shadow-none rounded-none">
      <Link href="/profile/1" className="w-full h-full bg-gray-200 flex flex-1">
        <CardContent className="flex flex-col items-center justify-center w-full relative bg-gray-200">
          <ImageIcon className="size-48 text-black p-2" strokeWidth={1} />
          <div className="absolute bottom-0 left-0 w-full p-4">
            <p className="text-black uppercase font-bold text-2xl">
              User Name{" "}
              <span className="text-gray-500 ml-2 font-semibold">Age</span>
            </p>
            <p>User description here...</p>
          </div>
        </CardContent>
      </Link>
      <CardFooter className="flex items-center w-full h-24 justify-around p-0">
        <XIcon
          className="size-16 text-red-600 border-2 border-gray-503 rounded-full p-2"
          strokeWidth={4}
        />
        <MatchModal />
      </CardFooter>
      <p className="text-gray-500 mb-4"># Betting</p>
    </Card>
  );
};

export default UserCards;
