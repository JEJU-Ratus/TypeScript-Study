import { useState } from "react";

interface Props {
  onAdd: (title: string, due?: string) => void;
}

export default function TodoForm({ onAdd }: Props) {
  const [title, setTitle] = useState("");
  const [due, setDue] = useState("");

  const submit = (e: React.SyntheticEvent) => {
    // SyntheticEvent : 가상의, 가짜 - submit을 꺼버렸기 때문에 가짜 이벤트임을 의미함.
    e.preventDefault();
    if (!title.trim()) return;
    onAdd(title.trim(), due || undefined);
    setTitle("");
    setDue("");
  };
  return (
    <form onSubmit={submit}>
      <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
      <input type="date" value={due} onChange={e => setDue(e.target.value)} />
      <button type="submit">추가</button>
    </form>
  );
}
