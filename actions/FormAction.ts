"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const addTodo = async (FormData: FormData) => {
  const todoTitle = FormData.get("title");
  // const status = FormData.has("checked"); //this is how to get checkbox data, but it is buggy, always returns false
  const text = FormData.get("text");
  console.log(`title: ${todoTitle}\nDescripction: ${text}`);

  const newTodo = await prisma.todo.create({
    data: {
      title: todoTitle as string,
      text: text as string,
    },
  });
  revalidatePath("/todos");
};

export const completeTodo = async (id: string) => {
  try {
    const oldTodo = await prisma.todo.findUnique({
      where: {
        id: id,
      },
    });
    const updatedTodo = await prisma.todo.update({
      where: {
        id: id,
      },
      data: {
        complete: oldTodo?.complete ? false : true,
      },
    });
  } catch (error) {
    console.log(error);
  }
  revalidatePath("/todos");
};

export const deleteTodo = async (id: string) => {
  try {
    const deletedTodo = await prisma.todo.delete({
      where: {
        id: id,
      },
    });
  } catch (error) {
    console.log(error);
  }
  revalidatePath("/todos");
};
