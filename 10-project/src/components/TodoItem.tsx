import type { Todo } from "../types";

interface Props {
  todo: Todo;
  onToggle: () => void;
}
export default function TodoItem({ todo, onToggle }: Props) {
  return (
    <li>
      <input type="checkbox" id={`todo-${todo.id}`} onChange={onToggle} />
      <label htmlFor={`todo-${todo.id}`} className={todo.done ? "done" : ""}>
        {todo.title}
      </label>
    </li>
  );
}
