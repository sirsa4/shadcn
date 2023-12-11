import Todo from "@/components/Todo";

const Todos = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      <Todo />
      <Todo />
    </div>
  );
};

export default Todos;
