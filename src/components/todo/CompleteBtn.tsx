"use client";
import { completeTodo } from "../../../actions/FormAction";
import { Button } from "../ui/button";

const CompleteBtn = ({ id }: { id: string }) => {
  return (
    <Button
      variant={`secondary`}
      onClick={() => completeTodo(id)}
      className="bg-green-300"
    >
      Complete todo
    </Button>
  );
};

export default CompleteBtn;
