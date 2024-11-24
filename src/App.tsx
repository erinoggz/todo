import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-blue-800">
      <div className="flex flex-col items-center w-full p-5 bg-white max-w-2xl h-[800px]">
        <h1 className="text-4xl font-bold text-center text-black mb-8">
          TODO APP 📋
        </h1>
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
};

export default App;

