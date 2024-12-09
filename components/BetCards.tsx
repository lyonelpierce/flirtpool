import { ChevronDown, ImageIcon } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "./ui/button";
import LikePassButtons from "./LikePassButtons";
import Link from "next/link";
const BetCards = () => {
  return (
    <Card className="flex flex-1 flex-col items-center justify-between w-full h-full overflow-hidden border-none shadow-none rounded-none">
      <div className="w-full px-4">
        <div className="grid grid-cols-2 gap-2 w-full">
          <Link
            href="/profile/1"
            className="w-full h-full flex flex-1 flex-col gap-4"
          >
            <CardContent className="flex flex-col items-center justify-center relative bg-gray-200 h-44 w-full">
              <ImageIcon className="size-16 text-black p-2" strokeWidth={1} />
              <div className="absolute bottom-0 left-0 w-full p-4">
                <p className="text-black uppercase font-bold text-sm">
                  Name,
                  <span className="text-gray-500 ml-2 font-semibold">Age</span>
                </p>
              </div>
            </CardContent>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col">
                <p className="font-semibold text-sm">About</p>
                <p className="text-gray-500 font-medium text-xs">
                  About text...
                </p>
              </div>
              <div className="flex flex-col">
                <p className="font-semibold text-sm">Hobbies</p>
                <p className="text-gray-500 font-medium text-xs">
                  Hobbies text...
                </p>
              </div>
              <div className="flex flex-col">
                <p className="font-semibold text-sm">Job</p>
                <p className="text-gray-500 font-medium text-xs">Job text...</p>
              </div>
              <div className="flex flex-col">
                <p className="font-semibold text-sm">Relationship Goals</p>
                <p className="text-gray-500 font-medium text-xs">
                  Goals text...
                </p>
              </div>
              <div className="flex flex-col">
                <p className="font-semibold text-sm">Favorite Song</p>
                <p className="text-gray-500 font-medium text-xs">
                  Fav song text...
                </p>
              </div>
              <div className="flex flex-col">
                <p className="font-semibold text-sm">Location</p>
                <p className="text-gray-500 font-medium text-xs">
                  Location text...
                </p>
              </div>
            </div>
          </Link>
          <div id="userCard1" className="flex flex-col gap-4 w-full">
            <CardContent className="flex flex-col items-center justify-center relative bg-gray-200 h-44 w-full">
              <ImageIcon className="size-16 text-black p-2" strokeWidth={1} />
              <div className="absolute bottom-0 left-0 w-full p-4">
                <p className="text-black uppercase font-bold text-sm">
                  Name,
                  <span className="text-gray-500 ml-2 font-semibold">Age</span>
                </p>
              </div>
            </CardContent>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col">
                <p className="font-semibold text-sm">About</p>
                <p className="text-gray-500 font-medium text-xs">
                  About text...
                </p>
              </div>
              <div className="flex flex-col">
                <p className="font-semibold text-sm">Hobbies</p>
                <p className="text-gray-500 font-medium text-xs">
                  Hobbies text...
                </p>
              </div>
              <div className="flex flex-col">
                <p className="font-semibold text-sm">Job</p>
                <p className="text-gray-500 font-medium text-xs">Job text...</p>
              </div>
              <div className="flex flex-col">
                <p className="font-semibold text-sm">Relationship Goals</p>
                <p className="text-gray-500 font-medium text-xs">
                  Goals text...
                </p>
              </div>
              <div className="flex flex-col">
                <p className="font-semibold text-sm">Favorite Song</p>
                <p className="text-gray-500 font-medium text-xs">
                  Fav song text...
                </p>
              </div>
              <div className="flex flex-col">
                <p className="font-semibold text-sm">Location</p>
                <p className="text-gray-500 font-medium text-xs">
                  Location text...
                </p>
              </div>
            </div>
          </div>
        </div>
        <Button
          className="w-full rounded-full uppercase mt-4"
          variant="outline"
        >
          See More
          <ChevronDown className="size-4" />
        </Button>
      </div>
      <CardFooter className="fixed bottom-0 left-0 flex flex-col items-center w-full justify-around p-0 bg-white border-t border-gray-300 py-4">
        <p className="flex flex-col items-center justify-center font-bold text-lg mb-2">
          Will user and user match?
        </p>
        <LikePassButtons />
      </CardFooter>
    </Card>
  );
};

export default BetCards;
