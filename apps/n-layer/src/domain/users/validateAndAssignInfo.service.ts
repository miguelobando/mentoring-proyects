import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { Users } from '../../persistence/entities/Users';
import { ValidationResponse } from './interfaces/validation';

@Injectable()
export class ValidateAndAssignService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
  ) {}

  async checkAndAssignUsername(
    firstName: string,
    lastName: string,
  ): Promise<ValidationResponse> {
    const validation = await this.validateNames(firstName, lastName);
    if (validation == false) {
      return {
        isValid: false,
        username: '',
      };
    }

    const username = await this.checkUserName(firstName, lastName);
    return {
      isValid: true,
      username,
    };
  }

  private async checkUserName(firstName: string, lastName: string) {
    const username = firstName[0] + lastName;
    const result = await this.usersRepository.find({
      where: { username: username },
    });

    if (result.length > 0) {
      const usersWithTheName = await this.usersRepository.count({
        where: { username: Like(`${username}%`) },
      });

      return username + usersWithTheName;
    } else {
      return username;
    }
  }

  private async validateNames(firstName: string, lastName: string) {
    const charactersAndNumbers = new RegExp(/[\d\W]/g);
    if (
      !charactersAndNumbers.test(firstName) &&
      !charactersAndNumbers.test(lastName)
    ) {
      return true;
    } else {
      return false;
    }
  }
}
