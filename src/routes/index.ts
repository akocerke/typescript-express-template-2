import { Router } from 'express';
import TodosRouter from './todos';
import UserRouter from './user';

const AppRouter = Router();

AppRouter.use('/v1/todos', TodosRouter);
AppRouter.use('/v1/user', UserRouter);

export default AppRouter;
