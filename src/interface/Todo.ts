export interface Todo {
  id: string;
  title: string;
  complated: boolean;
  endDate: Date | null;
  createDate: Date;
}

export type SaveTodo = (todo: Todo) => void;
