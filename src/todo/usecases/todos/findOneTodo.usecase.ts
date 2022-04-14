import { Injectable } from '@nestjs/common';
import { ITodoRepository } from 'src/todo/domains/repositories/itodo.repository';

@Injectable()
export class FindOneTodoUseCase {
  constructor(private readonly todoRepository: ITodoRepository) {}
  async exec(id: number) {
    return this.todoRepository.findOneById(id);
  }
}
