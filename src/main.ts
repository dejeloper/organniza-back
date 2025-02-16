import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: true,
    methods: 'GET,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Authorization',
    credentials: true,
  });

  app.setGlobalPrefix('api');

  app.use((req, res, next) => {
    if (req.originalUrl === '/') {
      return res.redirect(301, '/api');
    }
    next();
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
