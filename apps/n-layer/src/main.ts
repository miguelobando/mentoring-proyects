import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NLayerModule } from './n-layer.module';

async function bootstrap() {
  const app = await NestFactory.create(NLayerModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(4000);
}
bootstrap();
