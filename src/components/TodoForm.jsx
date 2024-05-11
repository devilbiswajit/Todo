import React from 'react';
import { useTodo } from '../context/Todocontext';
import Button from './Button';

function TodoForm({ newTodo, setNewTodo }) {
  const { addTodo } = useTodo();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTodo) return;
    addTodo({ todo: newTodo, isCompleted: false });
    setNewTodo(""); 
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex">
      <input
        type="text"
        placeholder="Write your Todo"
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/30 py-1.5"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <Button type="submit" className="rounded-r-lg py-2 px-4 bg-green-600 text-white">
        Add
      </Button>
    </form>
  );
}

export default TodoForm;
