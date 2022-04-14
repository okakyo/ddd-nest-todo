import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [
    TodoModule,
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      username: 'user',
      password: 'password',
      port: 18400,
      database: 'test',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
