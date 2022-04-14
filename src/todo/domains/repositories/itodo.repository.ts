import { CreateTodoDTO, UpdateTodoDTO } from 'src/todo/dto/todo.dto';
import { ITodo } from '../objects/itodo.object';

export abstract class ITodoRepository {
  abstract findAll(): Promise<ITodo[]>;
  abstract findOneById(id: number): Promise<ITodo | null>;
  abstract createTodo(todo: CreateTodoDTO): Promise<void>;
  abstract updateTodo(id: number, todo: UpdateTodoDTO): Promise<void>;
  abstract deleteTodo(id: number): Promise<void>;
}
