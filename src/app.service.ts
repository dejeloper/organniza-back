import {Injectable} from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getApiInfo(): Record<string, string> {
    return {
      name: 'Organniza API',
      version: '1.0.0',
      status: 'Running',
      message: 'Bienvenido a Organniza API',
    };
  }

  healthCheck(): string {
    return 'OK';
  }
}
