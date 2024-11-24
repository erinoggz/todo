import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todo";
import { TodoFieldType, TodoSchema } from "../schemas/todo.schema";

const TodoForm: React.FC = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TodoFieldType>({
    resolver: zodResolver(TodoSchema),
  });

  const onSubmit = (data: TodoFieldType) => {
    dispatch(addTodo(data.text));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full">
      <div className="flex flex-col w-full sm:flex-row px-4">
        <input
          {...register("text")}
          type="text"
          placeholder="Enter a TODO"
          className="w-full px-4 py-2 mr-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-200"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-blue-900 text-white rounded-lg shadow-md hover:bg-blue-600"
        >
          Add
        </button>
      </div>
      {errors.text && (
        <p className="text-red-500 text-sm mt-2 pl-4 sm:mt-0">
          {errors.text.message}
        </p>
      )}
    </form>
  );
};

export default TodoForm;
