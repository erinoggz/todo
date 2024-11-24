import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ITodo {
  createdAt: string
  id: number;
  text: string;
}

interface TodoState {
  todos: ITodo[];
}

const initialState: TodoState = {
  todos: [],
};

const todo = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo = {
        id: Date.now(),
        text: action.payload,
        createdAt: new Date().toLocaleString("en-US"),
      };
      state.todos.push(newTodo);
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo } = todo.actions;
export default todo.reducer;
