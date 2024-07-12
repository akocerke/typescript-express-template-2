export interface TodoAttributes {
  id?: number;
  userId: number;
  task: string;
  isDone?: boolean;
  dueDate: Date | string;
}
