import { Controller, Get } from '@nestjs/common';
import { HexagonalService } from './hexagonal.service';

@Controller()
export class HexagonalController {
  constructor(private readonly hexagonalService: HexagonalService) {}

  @Get()
  getHello(): string {
    return this.hexagonalService.getHello();
  }
}
