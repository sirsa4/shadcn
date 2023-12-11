"use client";
import { completeTodo, deleteTodo } from "../../../actions/FormAction";
import { Button } from "../ui/button";

const CompleteBtn = ({
  id,
  type,
  txt,
}: {
  id: string;
  type: string;
  txt: string;
}) => {
  return (
    <Button
      variant={`secondary`}
      onClick={() => (type === "complete" ? completeTodo(id) : deleteTodo(id))}
      className="bg-green-300"
    >
      {txt}
    </Button>
  );
};

export default CompleteBtn;
