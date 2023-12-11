import { TodoType } from "@/lib/types";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Switch } from "./ui/switch";

const Todo = ({ todo }: { todo: TodoType }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{todo.title}</CardTitle>
        <CardDescription>
          Status: {todo.complete ? "completed" : "not complete"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>{todo.text}</p>

        <Button variant={`secondary`} className="bg-green-300">
          Complete todo
        </Button>
        {/* <div className="flex items-center space-x-2 ">
          <Switch id="complete" />
          <label htmlFor="complete">Complete</label>
        </div> */}
      </CardContent>
      <CardFooter>
        Created: {todo.createdAt.split("").splice(0, 10)} | Completed:
        {todo.complete ? "yes" : "no"}
      </CardFooter>
    </Card>
  );
};

export default Todo;
