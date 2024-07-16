export interface ImarkTodoBody {
  todoId: number;
  newIsDone: boolean;
}

export interface IupdateTodoBody {
  todoId: number;
  newTask: string;
  newIsDone: boolean;
  newDueDate: Date; //date
}

export interface IcreateTodoBody {
  newTask: string;
  newIsDone: boolean;
  newDueDate: Date;
  newUserId: number;
}

export interface IdeleteTodoBody {
  todoId: number;
}
