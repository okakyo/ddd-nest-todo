import { Injectable } from '@nestjs/common';
import { ITodoRepository } from 'src/todo/domains/repositories/itodo.repository';

@Injectable()
export class DeleteTodoUseCase {
  constructor(private readonly todoRepository: ITodoRepository) {}
  async exec(id: number): Promise<void> {
    return this.todoRepository.deleteTodo(id);
  }
}
