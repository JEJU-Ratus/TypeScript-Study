import { useEffect, useState } from "react";
import "./App.css";
import type { Todo } from "./types";
import * as S from "./store";

import TodoForm from "./components/TodoForm";

function load(): Todo[] {
  const raw = localStorage.getItem("todos");
  return raw ? (JSON.parse(raw) as Todo[]) : [];
}
function save(todos: Todo[]) {
  localStorage.setItem("todos", JSON.stringify(todos));
}
function App() {
  // const [todos, setTodos] = useState<Todo[]>(()=>load());
  const [todos, setTodos] = useState<Todo[]>(load);
  useEffect(() => {
    save(todos);
  }, [todos]);
  return (
    <>
      <h1>Todo List</h1>
      <TodoForm
        onAdd={(title: string, due?: string) => setTodos(prev => S.add(prev, { title, due }))}
      />
    </>
  );
}

export default App;
