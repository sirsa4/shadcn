import { TodoType } from "@/lib/types";
import { Button } from "../ui/button";
import prisma from "@/lib/prisma";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Switch } from "../ui/switch";
import CompleteBtn from "./CompleteBtn";

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

        {/* <div className="flex items-center space-x-2 ">
          <Switch id="complete" />
          <label htmlFor="complete">Complete</label>
        </div> */}
        <div className="flex gap-4">
          <CompleteBtn id={todo.id} txt="Complete todo" type="complete" />
          <CompleteBtn id={todo.id} txt="Delete todo" type="delete" />
        </div>
      </CardContent>
      <CardFooter>
        Created: unknow | Completed:
        {todo.complete ? "yes" : "no"}
      </CardFooter>
    </Card>
  );
};

export default Todo;
