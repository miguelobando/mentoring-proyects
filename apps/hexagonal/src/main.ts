import { NestFactory } from '@nestjs/core';
import { HexagonalModule } from './hexagonal.module';

async function bootstrap() {
  const app = await NestFactory.create(HexagonalModule);
  await app.listen(3000);
}
bootstrap();
