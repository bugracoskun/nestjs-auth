import { Module } from '@nestjs/common';
import { ConfigServiceService } from './config-service.service';

@Module({
  providers: [ConfigServiceService]
})
export class ConfigServiceModule {}
