import type { Todo } from "../types";

interface Props {
  todo: Todo;
  onToggle: () => void;
  onDelete: () => void;
}
export default function TodoItem({ todo, onToggle, onDelete }: Props) {
  return (
    <li>
      <input type="checkbox" id={`todo-${todo.id}`} onChange={onToggle} />
      <label htmlFor={`todo-${todo.id}`} className={todo.done ? "done" : ""}>
        {todo.title}
      </label>
      <button>수정</button>
      <button onClick={onDelete}>삭제</button>
    </li>
  );
}
