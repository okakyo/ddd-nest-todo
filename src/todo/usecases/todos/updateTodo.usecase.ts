import { Injectable } from '@nestjs/common';
import { ITodoRepository } from 'src/todo/domains/repositories/itodo.repository';
import { UpdateTodoDTO } from 'src/todo/dto/todo.dto';

@Injectable()
export class UpdateTodoUseCase {
  constructor(private readonly todoRepository: ITodoRepository) {}
  async exec(id: number, todo: UpdateTodoDTO) {
    return this.todoRepository.updateTodo(id, todo);
  }
}
