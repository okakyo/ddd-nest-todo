import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoModule } from './todo/todo.module';
import { join } from 'path';

@Module({
  imports: [
    TodoModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'user',
      password: 'password',
      database: 'dev',
      entities: [join(__dirname + '/**/infra/entities/*.entity{.ts,.js}')],
      synchronize: true,
    }),
  ],
})
export class AppModule {}
