import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_GUARD } from '@nestjs/core';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AuthGuard } from './auth/auth.guard';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './users/entity/users.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ConfigServiceModule } from './config-service/config-service.module';
import { ConfigServiceService } from './config-service/config-service.service';

@Module({
  imports: [UsersModule, AuthModule, TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: async (configService: ConfigService) => ({
      type: 'postgres',
      host: configService.get('DB_HOST'),
      port: parseInt(configService.get('DB_PORT')),
      username: configService.get('DB_USERNAME'),
      password: configService.get('DB_PASSWORD'),
      database: configService.get('DB_NAME'),
      entities: [UserEntity],
      synchronize: true,
    }),
    inject: [ConfigService], // ConfigService'i enjekte edin
  }), ConfigModule.forRoot({ envFilePath: ['config/database.env', 'config/.env'], isGlobal: true, }), ConfigServiceModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    ConfigServiceService
  ],
})
export class AppModule { }
