export interface ImarkBody {
    todoId:number;
    newIsDone:boolean;
}

export interface IupdateBody{
    todoId:number;
    newTask:string;
    newIsDone:boolean;
    newDueDate:Date;
}

export interface IcreateBody{
    newTask:string;
    newIsDone:boolean;
    newDueDate:Date;
    newUserId:number;
}

export interface IdeleteBody{
    todoId:number;
}