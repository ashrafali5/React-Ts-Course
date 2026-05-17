import { Button } from "./components/ui/button";
import { ArrowUpIcon } from "lucide-react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card";

const App = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description...</CardDescription>
          <CardAction>CardAction</CardAction>
        </CardHeader>
        <CardContent>Card Content</CardContent>
        <CardFooter>Card Footer</CardFooter>
      </Card>

      <Button variant={"destructive"}>Subscribe</Button>
      <Button size={"icon"} aria-label="Submit">
        <ArrowUpIcon />
      </Button>
    </div>
  );
};

export default App;
