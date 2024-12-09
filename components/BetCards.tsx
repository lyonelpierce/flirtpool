import { CheckIcon, ChevronDown, ImageIcon, XIcon } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "./ui/button";

const BetCards = () => {
  return (
    <Card className="flex flex-1 flex-col items-center justify-between w-full h-[calc(100vh-176px)] overflow-hidden border-none shadow-none rounded-none">
      <div className="w-full px-4">
        <div className="grid grid-cols-2 gap-2 w-full">
          <div id="userCard" className="flex flex-col gap-4 w-full">
            <CardContent className="flex flex-col items-center justify-center w-full relative bg-gray-200 h-60">
              <ImageIcon className="size-24 text-black p-2" strokeWidth={1} />
              <div className="absolute bottom-0 left-0 w-full p-4">
                <p className="text-black uppercase font-bold text-sm">
                  User Name{" "}
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
          <div id="userCard1" className="flex flex-col gap-4 w-full">
            <CardContent className="flex flex-col items-center justify-center w-full relative bg-gray-200 h-60">
              <ImageIcon className="size-24 text-black p-2" strokeWidth={1} />
              <div className="absolute bottom-0 left-0 w-full p-4">
                <p className="text-black uppercase font-bold text-sm">
                  User Name{" "}
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
          className="w-full rounded-full uppercase mt-6"
          variant="outline"
        >
          See More
          <ChevronDown className="size-4" />
        </Button>
      </div>
      <CardFooter className="flex flex-col items-center w-full justify-around p-0 border-t border-gray-300 py-4">
        <p className="flex flex-col items-center justify-center font-bold text-lg mb-2">
          Will user and user match?
        </p>
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
      </CardFooter>
    </Card>
  );
};

export default BetCards;
