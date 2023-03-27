import { Controller, Get } from '@nestjs/common';
import { NLayerService } from './n-layer.service';

@Controller()
export class NLayerController {
  constructor(private readonly nLayerService: NLayerService) {}

  @Get()
  getHello(): string {
    return this.nLayerService.getHello();
  }
}
