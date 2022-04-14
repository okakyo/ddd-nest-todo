import { Injectable } from '@nestjs/common';
import { ITodoRepository } from 'src/todo/domains/repositories/itodo.repository';

@Injectable()
export class FindAllTodoUseCase {
  constructor(private readonly todoRepository: ITodoRepository) {}
  async exec() {
    return this.todoRepository.findAll();
  }
}
