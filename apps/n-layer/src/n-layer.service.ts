import { Injectable } from '@nestjs/common';

@Injectable()
export class NLayerService {
  getHello(): string {
    return 'Hello World!';
  }
}
