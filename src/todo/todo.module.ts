import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ITodoRepository } from './domains/repositories/itodo.repository';
import { TodoEntity } from './infra/entities/todo.entity';
import { TodoRepository } from './infra/repositories/todo.repository';
import { TodoController } from './presenters/todo.controller';
import { CreateTodoUseCase } from './usecases/todos/createTodo.usecase';
import { DeleteTodoUseCase } from './usecases/todos/deleteTodo.usecas';
import { FindAllTodoUseCase } from './usecases/todos/findAllTodo.usecase';
import { FindOneTodoUseCase } from './usecases/todos/findOneTodo.usecase';
import { UpdateTodoUseCase } from './usecases/todos/updateTodo.usecase';

@Module({
  imports: [TypeOrmModule.forFeature([TodoEntity])],
  exports: [TypeOrmModule],
  providers: [
    CreateTodoUseCase,
    UpdateTodoUseCase,
    DeleteTodoUseCase,
    FindAllTodoUseCase,
    FindOneTodoUseCase,
    {
      provide: ITodoRepository,
      useClass: TodoRepository,
    },
  ],
  controllers: [TodoController],
})
export class TodoModule {}
