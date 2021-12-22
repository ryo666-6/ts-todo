import React, { useState } from "react";
import TodoList from "./components/todoList";
import NewTodo from "./components/NewTodo";
import { Todo } from "./todo.model";
// function App() {
//   return (
//     <div className="App">

//     </div>
//   );
// }

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const todoAddHnadler = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text: text },
    ]);
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== todoId) )
  }
  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHnadler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler}/>
    </div>
  );
};

export default App;
