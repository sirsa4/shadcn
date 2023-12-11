import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

const Todo = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Todo title</CardTitle>
        <CardDescription>Status: </CardDescription>
      </CardHeader>
      <CardContent>
        <p>Todo text</p>
      </CardContent>
      <CardFooter>todo.date created: 23.09 | Date completed: 25.09 </CardFooter>
    </Card>
  );
};

export default Todo;
