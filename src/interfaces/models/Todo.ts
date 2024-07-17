import { TodoAttributes } from '../db-models/TodoAttributes';

export interface Todo extends TodoAttributes {
  id: number;
}
