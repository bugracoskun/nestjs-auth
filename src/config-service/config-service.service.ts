import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ConfigServiceService {
    constructor(private readonly configService: ConfigService) { }

    isDevelopment(): boolean {
        const isDev = this.configService.get<string>('IS_DEVELOPMENT', 'false');
        return isDev === 'true' || isDev === '1';
    }
}
