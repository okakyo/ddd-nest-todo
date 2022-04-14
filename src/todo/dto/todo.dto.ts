import { IsBoolean, Length } from 'class-validator';

export class CreateTodoDTO {
  @Length(1, 100)
  title: string;
}

export class UpdateTodoDTO {
  @Length(1, 100)
  title?: string;

  @IsBoolean()
  isDone?: boolean;
}
