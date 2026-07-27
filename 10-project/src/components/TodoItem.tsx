import type { Todo } from "../types";

interface Props {
  todo: Todo;
}
export default function TodoItem({ todo }: Props) {
  return (
    <li>
      <input type="checkbox" id={`todo-${todo.id}`} />
      <label htmlFor={`todo-${todo.id}`}>{todo.title}</label>
    </li>
  );
}
