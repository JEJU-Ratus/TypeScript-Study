import { useState } from "react";
import type { Todo, TodoUpdate } from "../types";

interface Props {
  todo: Todo;
  onToggle: () => void;
  onDelete: () => void;
  onEdit: (patch: TodoUpdate) => void;
}
export default function TodoItem({ todo, onToggle, onDelete, onEdit }: Props) {
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [due, setDue] = useState(todo.due ?? "");
  const saveEdit = () => {
    const patch: TodoUpdate = { title: title.trim() || todo.title, due: due || undefined };
    onEdit(patch);
    setEdit(false);
  };
  return (
    <li>
      {edit ? (
        <>
          <input type="text" value={title ?? ""} onChange={e => setTitle(e.target.value)} />
          <input type="date" value={due ?? ""} onChange={e => setDue(e.target.value)} />
          <button type="button" onClick={saveEdit}>
            입력
          </button>
          <button type="button" onClick={() => setEdit(false)}>
            취소
          </button>
        </>
      ) : (
        <>
          <input type="checkbox" id={`todo-${todo.id}`} onChange={onToggle} />
          <label htmlFor={`todo-${todo.id}`} className={todo.done ? "done" : ""}>
            {todo.title}
          </label>
          <button onClick={() => setEdit(true)}>수정</button>
          <button onClick={onDelete}>삭제</button>
        </>
      )}
    </li>
  );
}
