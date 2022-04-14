export type ITodoEntity = {
  id: number;
  title: string;
  isDone: boolean;
};

export class ITodo implements ITodoEntity {
  id: number;
  title: string;
  isDone: boolean;

  constructor(id: number, title: string, isDone: boolean) {
    this.id = id;
    this.title = title;
    this.isDone = isDone;
  }
}
