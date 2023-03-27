import { Body, Controller, Get, Post } from '@nestjs/common';
import { ResourcesService } from '../../domain/resources/resources.service';
import { CreateResourceDto } from '../../domain/resources/interfaces/dto';

@Controller('resources')
export class ResourcesController {
  constructor(private readonly resourcesService: ResourcesService) {}
  @Post('')
  async create(@Body() resource: CreateResourceDto) {
    return this.resourcesService.createResource(resource.name);
  }

  @Get('')
  async getResources() {
    return this.resourcesService.getResources();
  }
}
