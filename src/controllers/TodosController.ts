import { Body, Controller, Delete, Get, Post, Put, Query, Route } from 'tsoa';
import { StatusCodes } from 'http-status-codes';
import TodoModel from '../database/models/TodoModel';
import { Todo } from '../interfaces/models/Todo';
import {
  IcreateTodoBody,
  IdeleteTodoBody,
  ImarkTodoBody,
  IupdateTodoBody,
  IbyIdResponse,
} from '../interfaces/Routes/todos';

@Route('todos')
export class TodoController extends Controller {
  @Get('/byid')
  public async getTodoById(@Query() todoId: number): Promise<IbyIdResponse> {
    try {
      const todo = await TodoModel.findOne({ where: { id: todoId } });

      if (!todo) {
        this.setStatus(StatusCodes.NOT_FOUND);
        throw new Error(`Todo with id ${todoId} not found.`);
      }

      // Convert dueDate from string to Date
      const newDueDate = new Date(todo.dueDate);

      return {
        todoId: todo.id,
        userId: todo.userId,
        newTask: todo.task,
        newIsDone: todo.isDone,
        newDueDate: newDueDate,
      };
    } catch (error) {
      this.setStatus(StatusCodes.INTERNAL_SERVER_ERROR);
      throw error;
    }
  }

  @Get('all')
  public async getAllTodos(): Promise<Todo[]> {
    try {
      const todos = await TodoModel.findAll();
      return todos.map(todo => todo.get() as Todo);
    } catch (error) {
      this.setStatus(StatusCodes.INTERNAL_SERVER_ERROR);
      throw error;
    }
  }

  @Put('mark')
  public async markTodoDone(
    @Body() requestBody: ImarkTodoBody,
  ): Promise<{ updatedTodoId: number }> {
    const { todoId, newIsDone } = requestBody;

    try {
      if (!todoId) {
        this.setStatus(StatusCodes.BAD_REQUEST);
        throw new Error('Todo ID is required.');
      }

      await TodoModel.update({ isDone: newIsDone }, { where: { id: todoId } });

      return { updatedTodoId: todoId };
    } catch (error) {
      this.setStatus(StatusCodes.BAD_REQUEST);
      throw error;
    }
  }

  @Put('update')
  public async updateTodo(
    @Body() requestBody: IupdateTodoBody,
  ): Promise<{ updatedTodoId: number }> {
    const { todoId, newTask, newIsDone, newDueDate } = requestBody;

    try {
      if (!todoId) {
        this.setStatus(StatusCodes.BAD_REQUEST);
        throw new Error('Todo ID is required.');
      }

      await TodoModel.update(
        {
          task: newTask,
          isDone: newIsDone,
          dueDate: newDueDate,
        },
        { where: { id: todoId } },
      );

      return { updatedTodoId: todoId };
    } catch (error) {
      this.setStatus(StatusCodes.BAD_REQUEST);
      throw error;
    }
  }

  @Post('create')
  public async createTodo(
    @Body() requestBody: IcreateTodoBody,
  ): Promise<{ todo: Todo }> {
    const { newTask, newIsDone, newDueDate, newUserId } = requestBody;

    try {
      if (!newTask || !newDueDate || !newUserId) {
        this.setStatus(StatusCodes.BAD_REQUEST);
        throw new Error('One of the required parameters is missing.');
      }

      const newTodo = {
        task: newTask,
        isDone: newIsDone,
        dueDate: new Date(newDueDate),
        userId: newUserId,
      };

      const todo = await TodoModel.create(newTodo);

      return { todo: todo.get() as Todo };
    } catch (error) {
      this.setStatus(StatusCodes.BAD_REQUEST);
      throw error;
    }
  }

  @Delete('delete')
  public async deleteTodo(
    @Body() requestBody: IdeleteTodoBody,
  ): Promise<{ deletedTodoId: number }> {
    const { todoId } = requestBody;

    try {
      await TodoModel.destroy({ where: { id: todoId } });

      return { deletedTodoId: todoId };
    } catch (error) {
      this.setStatus(StatusCodes.BAD_REQUEST);
      throw error;
    }
  }
}
