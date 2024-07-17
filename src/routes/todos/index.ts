import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import {
  IcreateTodoBody,
  IdeleteTodoBody,
  ImarkTodoBody,
  IupdateTodoBody,
} from '../../interfaces/Routes/todos';
import { TodoController } from '../../controllers/TodosController';

const TodosRouter = Router();

// GET Todo byid
TodosRouter.get('/byid', async (req, res) => {
  const controller = new TodoController();
  const todoId = parseInt(req.query.todoId as string);
  const result = await controller.getTodoById(todoId);
  console.log(`ToDo mit der ID: ${todoId} gefunden`, result);
  res.status(StatusCodes.OK).json(result);
});

// GET Alle Todos
TodosRouter.get('/all', async (req, res) => {
  const controller = new TodoController();
  const result = await controller.getAllTodos();
  console.log('Alle Todos gefunden:', result);
  res.status(StatusCodes.OK).json(result);
});

// PUT Todo mark as done or not done
TodosRouter.put('/mark', async (req, res) => {
  const controller = new TodoController();

  try {
    const { todoId, newIsDone } = req.body as ImarkTodoBody;

    if (!todoId) throw new Error('keine User Id');

    // Die Controller-Methode aufrufen und das Ergebnis abwarten
    const result = await controller.markTodoDone({ todoId, newIsDone });
    console.log(
      `Todo ID: ${todoId} => ${newIsDone ? 'erledigt markiert' : 'unerledigt markiert'}`,
    );
    res.status(StatusCodes.OK).json(result);
  } catch (e) {
    if (e instanceof Error) {
      res.status(StatusCodes.BAD_REQUEST);
    } else {
      res.status(StatusCodes.BAD_REQUEST);
    }
  }
});

// PUT Todo aktualisieren
TodosRouter.put('/update', async (req, res) => {
  const controller = new TodoController();

  try {
    const requestBody: IupdateTodoBody = req.body;
    // Die Controller-Methode aufrufen und das Ergebnis abwarten
    const result = await controller.updateTodo(requestBody);
    // Dynamisches console.log
    console.log(
      `Todo ID: ${requestBody.todoId} wurde aktualisiert. Neue Aufgabe: ${requestBody.newTask}, Status: ${requestBody.newIsDone ? 'erledigt' : 'unerledigt'}, Fälligkeitsdatum: ${requestBody.newDueDate}`,
    );
    res.status(StatusCodes.OK).json(result);
  } catch (e) {
    if (e instanceof Error) {
      res.status(StatusCodes.BAD_REQUEST).send(e.message);
    } else {
      res.status(StatusCodes.BAD_REQUEST).send('Unknown error occurred');
    }
  }
});

// POST Todo erstellen
TodosRouter.post('/create', async (req, res) => {
  const controller = new TodoController();

  try {
    const requestBody: IcreateTodoBody = req.body;

    if (
      !requestBody.newTask ||
      !requestBody.newDueDate ||
      !requestBody.newUserId
    ) {
      throw new ReferenceError('One of my required Parameters is not defined');
    }

    // Die Controller-Methode aufrufen und das Ergebnis abwarten
    const result = await controller.createTodo(requestBody);

    // Dynamisches console.log
    console.log(
      `Neues Todo erstellt: Aufgabe: ${requestBody.newTask}, Status: ${requestBody.newIsDone ? 'erledigt' : 'unerledigt'}, Fälligkeitsdatum: ${requestBody.newDueDate}, Benutzer-ID: ${requestBody.newUserId}`,
    );

    res.status(StatusCodes.OK).json(result);
  } catch (e) {
    if (e instanceof Error) {
      res.status(StatusCodes.BAD_REQUEST).send(e.message);
    } else {
      res.status(StatusCodes.BAD_REQUEST).send('Unknown error occurred');
    }
  }
});

// DELETE Todo löschen
TodosRouter.delete('/delete', async (req, res) => {
  const controller = new TodoController();

  try {
    const requestBody: IdeleteTodoBody = req.body;

    // Die Controller-Methode aufrufen und das Ergebnis abwarten
    const result = await controller.deleteTodo(requestBody);

    // Dynamisches console.log
    console.log(
      `Todo mit ID ${requestBody.todoId} wurde erfolgreich gelöscht.`,
    );

    res.status(StatusCodes.OK).json(result);
  } catch (e) {
    if (e instanceof Error) {
      res.status(StatusCodes.BAD_REQUEST).send(e.message);
    } else {
      res.status(StatusCodes.BAD_REQUEST).send('Unknown error occurred');
    }
  }
});

export default TodosRouter;
