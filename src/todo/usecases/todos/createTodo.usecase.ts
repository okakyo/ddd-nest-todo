import { Injectable } from '@nestjs/common';
import { ITodoRepository } from 'src/todo/domains/repositories/itodo.repository';
import { CreateTodoDTO } from 'src/todo/dto/todo.dto';

@Injectable()
export class CreateTodoUseCase {
  constructor(private readonly todoRepository: ITodoRepository) {}
  async exec(todo: CreateTodoDTO) {
    return this.todoRepository.createTodo(todo);
  }
}
