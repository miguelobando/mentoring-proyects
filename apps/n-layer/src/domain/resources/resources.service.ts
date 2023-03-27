import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Resources } from '../../persistence/entities/Resources';

@Injectable()
export class ResourcesService {
  constructor(
    @InjectRepository(Resources)
    private readonly resourcesRepository: Repository<Resources>,
  ) {}

  async createResource(name: string) {
    const res: Resources[] = await this.resourcesRepository.find({
      where: {
        name: name.toUpperCase(),
      },
    });

    if (res.length > 0) {
      return {
        code: 409,
        message: 'Resource already exists',
      };
    } else {
      const resource = this.resourcesRepository.create({
        name: name.toUpperCase(),
      });
      return this.resourcesRepository.save(resource);
    }
  }

  async getResources() {
    return this.resourcesRepository.find();
  }
}
