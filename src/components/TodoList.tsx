import React, { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../store/store";
import { deleteTodo, ITodo } from "../store/todo";
import Fallback from "./Fallback";

const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state?.todos.todos);
  const dispatch = useDispatch();

  const todoSort = useMemo(() => {
    return (
      todos
        .slice()
        .sort(
          (a: ITodo, b: ITodo) => 
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        ) || []
    );
  }, [todos]);

  return (
    <div className="w-full max-h-[800px] overflow-y-auto overflow-hidden">
      {todos.length === 0 ? (
        <Fallback />
      ) : (
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="grid gap-4">
            {todoSort.map((todo) => (
              <div
                key={todo.id}
                className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-sm transition hover:shadow-lg"
              >
                <div className="flex flex-col">
                  <span className="text-gray-800 font-semibold mb-2 text-lg">{todo.text}</span>
                  <span className="text-gray-800 text-xs">
                    {todo.createdAt}
                  </span>
                </div>
                <button
                  onClick={() => dispatch(deleteTodo(todo.id))}
                  className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition duration-200"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoList;
