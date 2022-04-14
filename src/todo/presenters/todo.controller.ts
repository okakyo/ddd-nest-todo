import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ITodo } from '../domains/objects/itodo.object';
import { CreateTodoDTO, UpdateTodoDTO } from '../dto/todo.dto';
import { CreateTodoUseCase } from '../usecases/todos/createTodo.usecase';
import { DeleteTodoUseCase } from '../usecases/todos/deleteTodo.usecas';
import { FindAllTodoUseCase } from '../usecases/todos/findAllTodo.usecase';
import { FindOneTodoUseCase } from '../usecases/todos/findOneTodo.usecase';
import { UpdateTodoUseCase } from '../usecases/todos/updateTodo.usecase';

@Controller()
export class TodoController {
  constructor(
    private readonly findAllUseCase: FindAllTodoUseCase,
    private readonly findOneUseCase: FindOneTodoUseCase,
    private readonly createUseCase: CreateTodoUseCase,
    private readonly updateUseCase: UpdateTodoUseCase,
    private readonly deleteUseCase: DeleteTodoUseCase,
  ) {}

  @Get('/todos')
  async findAll(): Promise<ITodo[]> {
    return this.findAllUseCase.exec();
  }

  @Get('/todo/:id')
  async findById(@Param('id', ParseIntPipe) id: number): Promise<ITodo | null> {
    const res = await this.findOneUseCase.exec(id);
    if (!res) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return res;
  }

  @Post('/todo/create')
  async createWork(@Body() todo: CreateTodoDTO): Promise<void> {
    return this.createUseCase.exec(todo);
  }

  @Put('/todo/update/:id')
  async updateWork(
    @Param('id', ParseIntPipe) id: number,
    @Body() todo: UpdateTodoDTO,
  ): Promise<void> {
    return this.updateUseCase.exec(id, todo);
  }

  @Delete('/todo/delete/:id')
  async deleteWork(@Param('id') id: number): Promise<void> {
    return this.deleteUseCase.exec(id);
  }
}
