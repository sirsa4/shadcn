import Todo from "@/components/todo/Todo";
import Form from "@/components/todo/Form";
import { Button } from "@/components/ui/button";
import prisma from "@/lib/prisma";
import { TodoType } from "@/lib/types";
import Link from "next/link";

const Todos = async () => {
  const todos = await prisma.todo.findMany();
  //const res = await fetch("http://localhost:3000/api/todo");
  //const todos = (await res.json()) as TodoType[];
  return (
    <main>
      <header>
        <h1>Todos</h1>
        <div>
          <Link href={"/todos/create"}>
            <Button>Create new todo</Button>
          </Link>
        </div>
      </header>
      <div className="grid grid-cols-4 gap-4">
        {todos.map((todo) => {
          return <Todo key={todo.id} todo={todo} />;
        })}
      </div>
    </main>
  );
};

export default Todos;
