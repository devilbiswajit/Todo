import React, { useState } from 'react';
import { useTodo } from '../context/Todocontext';
import Checkbox from './Checkbox';
import Button from './Button';

function TodoRow({ todo }) {
  const { deleteTodo, updateTodo, toggleTodo } = useTodo();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black ${
        todo.isCompleted ? 'bg-[#8ae43c]' : 'bg-[#f3f0f5]'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Checkbox
        checked={todo.isCompleted}
        onChange={() => toggleTodo(todo.id)}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          todo.isCompleted ? 'line-through' : ''
        }`}
        value={todo.todo}
        readOnly
      />
      {isHovered && (
        <>
          <Button onClick={() => updateTodo(todo.id, { ...todo, todo: 'Updated Todo' })}>Edit</Button>
          <Button onClick={() => deleteTodo(todo.id)}>X</Button>
        </>
      )}
    </div>
  );
}

export default TodoRow;
