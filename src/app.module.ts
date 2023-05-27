import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { Users2Module } from './users2/users2.module';

@Module({
  imports: [UsersModule, Users2Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
