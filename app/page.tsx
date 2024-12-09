import BetCards from "@/components/BetCards";
import UserCards from "@/components/UserCards";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default async function Home() {
  return (
    <Tabs defaultValue="bet" className="h-full w-full flex flex-col pt-12">
      <TabsList className="fixed top-0 left-0 mt-16 flex w-full h-12 border-b border-gray-300 bg-white p-0 z-10">
        <TabsTrigger
          value="bet"
          className="w-1/2 h-12 text-base data-[state=active]:shadow-none data-[state=active]:font-bold data-[state=active]:border-b-4 rounded-none data-[state=active]:border-b-primary"
        >
          Bet
        </TabsTrigger>
        <TabsTrigger
          value="match"
          className="w-1/2 h-12 text-base data-[state=active]:shadow-none data-[state=active]:font-bold data-[state=active]:border-b-4 rounded-none data-[state=active]:border-b-primary"
        >
          Match
        </TabsTrigger>
      </TabsList>
      <TabsContent value="bet" className="flex-1">
        <BetCards />
      </TabsContent>
      <TabsContent value="match" className="flex-1 px-4">
        <UserCards />
      </TabsContent>
    </Tabs>
  );
}
