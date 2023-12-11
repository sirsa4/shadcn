"use client";

import { useRef, useState } from "react";
import { addTodo } from "../../../actions/FormAction";
import { Switch } from "../ui/switch";
import { useRouter } from "next/navigation";

const Form = () => {
  const ref = useRef();
  const route = useRouter();
  const [isChecked, setChecked] = useState(false);
  return (
    <form
      action={async (FormData) => {
        await addTodo(FormData);
        route.push("/todos");
      }}
    >
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="username"
        >
          Todo title
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          name="title"
          type="text"
          placeholder="todo title"
        />
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="text"
        >
          Todo description
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="text"
          name="text"
          type="text"
          placeholder="todo description"
        />
        <div>
          <Switch
            // checked={isChecked}
            // onCheckedChange={() => setChecked((prev) => !prev)}
            className="bg-black"
          >
            Status
          </Switch>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Add todo
        </button>
      </div>
    </form>
  );
};

export default Form;
