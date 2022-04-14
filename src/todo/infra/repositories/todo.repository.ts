import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ITodo } from 'src/todo/domains/objects/itodo.object';
import { ITodoRepository } from 'src/todo/domains/repositories/itodo.repository';
import { CreateTodoDTO, UpdateTodoDTO } from 'src/todo/dto/todo.dto';
import { Repository } from 'typeorm';
import { TodoEntity } from '../entities/todo.entity';

@Injectable()
export class TodoRepository implements ITodoRepository {
  constructor(
    @InjectRepository(TodoEntity)
    private readonly todoRepository: Repository<TodoEntity>,
  ) {}

  async findAll(): Promise<ITodo[]> {
    const getTodos = this.todoRepository.find();
    return (await getTodos).map(
      (todo) => new ITodo(todo.id, todo.title, todo.isDone),
    );
  }

  async findOneById(id: number): Promise<ITodo> {
    const getTodo = await this.todoRepository.findOneBy({ id });
    if (getTodo) {
      return new ITodo(getTodo.id, getTodo.title, getTodo.isDone);
    } else {
      return null;
    }
  }
  async createTodo(todo: CreateTodoDTO): Promise<void> {
    await this.todoRepository.insert(todo);
    return;
  }
  async updateTodo(id: number, todo: UpdateTodoDTO): Promise<void> {
    await this.todoRepository.update(id, todo);
    return;
  }
  async deleteTodo(id: number): Promise<void> {
    await this.todoRepository.delete(id);
    return;
  }
}
