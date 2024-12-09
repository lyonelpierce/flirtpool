import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const LeaderboardPage = () => {
  return (
    <div className="flex flex-col h-full p-4 gap-4">
      <Table className="w-full border">
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Score</TableHead>
            <TableHead>Rank</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Jane Doe</TableCell>
            <TableCell>100</TableCell>
            <TableCell>1</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>John Doe</TableCell>
            <TableCell>98</TableCell>
            <TableCell>2</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Sarah Doe</TableCell>
            <TableCell>97</TableCell>
            <TableCell>3</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div className="absolute bottom-0 w-full left-0 p-4 mb-12">
        <Button
          type="submit"
          className="w-full uppercase font-semibold rounded-full h-12"
        >
          Share
        </Button>
      </div>
    </div>
  );
};

export default LeaderboardPage;
