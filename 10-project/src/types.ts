export interface Todo {
  id: number;
  title: string;
  done: boolean;
  due?: string;
  createdAt: string;
  updatedAt?: string;
}

// 글 생성
export type TodoCreate = Pick<Todo, "title" | "due">;

// 글 수정
export type TodoUpdate = Partial<Omit<Todo, "id" | "createdAt">>;
