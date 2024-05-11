import React, { useState, useEffect } from 'react';
import { TodocontextProvider } from './context/Todocontext';
import TodoForm from './components/TodoForm';
import TodoRow from './components/TodoRow';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)));
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? { ...prevTodo, isCompleted: !prevTodo.isCompleted } : prevTodo))
    );
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("todo"));
    if (data && data.length > 0) {
      setTodos(data);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodocontextProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleTodo }}>
      <div className="bg-white min-h-screen py-8 ">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-black">
          <h1 className="text-3xl text-black text-center mb-8 mt-2">Todo</h1>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoRow todo={todo} />
              </div>
            ))}
          </div>
          <div className="mt-8">
            <TodoForm />
          </div>
        </div>
      </div>
    </TodocontextProvider>
  );
}

export default App;

