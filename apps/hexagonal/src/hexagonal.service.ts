import { Injectable } from '@nestjs/common';

@Injectable()
export class HexagonalService {
  getHello(): string {
    return 'Hello World!';
  }
}
