
import { useContext, createContext } from 'react';

const Todocontext = createContext({
  todos: [],
  addTodo: () => {},
  updateTodo: () => {},
  deleteTodo: () => {},
  toggleTodo: () => {}
});

export const useTodo = () => {
  return useContext(Todocontext);
};

export const TodocontextProvider = Todocontext.Provider;