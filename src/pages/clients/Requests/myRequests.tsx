import {
  ChevronDownIcon,
  CircleIcon,
  PlusIcon,
  StarIcon,
} from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";

export const MyRequests = () => {
  const me = [
    {
      id: 1,
      name: "kkkd",
      request_header: "help with some bug issues in one of our apps.",
    },
    {
      id: 2,
      name: "dsadsa",
      request_header: "what is wrong with our website?",
    },
    {
      id: 3,
      name: "daniel",
      request_header: "we want some new app in our environment.",
    },
  ];
  return (
    <div className="min-h-full flex justify-center items-start">
      {me.map((x) => (
        <Card className="w-6/12 m-5 cursor-pointer" key={x.id}>
          <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
            <div className="space-y-2">
              <CardTitle>{x.name}</CardTitle>
              <CardDescription>{x.request_header}</CardDescription>
            </div>
            <div className="flex items-center space-x-1 rounded-md bg-secondary text-secondary-foreground">
              <Button variant="secondary" className="px-3 shadow-none">
                <StarIcon className="mr-2 h-4 w-4" />
                Star
              </Button>
              <Separator orientation="vertical" className="h-[20px]" />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="secondary" className="px-2 shadow-none">
                    <ChevronDownIcon className="h-4 w-4 text-secondary-foreground" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  alignOffset={-5}
                  className="w-[200px]"
                  forceMount>
                  <DropdownMenuLabel>Suggested Lists</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem checked>
                    Future Ideas
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>My Stack</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>
                    Inspiration
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <PlusIcon className="mr-2 h-4 w-4" /> Create List
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <CircleIcon className="mr-1 h-3 w-3 fill-sky-400 text-sky-400" />
                TypeScript
              </div>
              <div className="flex items-center">
                <StarIcon className="mr-1 h-3 w-3" />
                20k
              </div>
              <div>Updated April 2023</div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

