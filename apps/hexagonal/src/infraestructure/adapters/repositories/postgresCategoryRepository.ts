import { Category } from 'apps/hexagonal/src/core/domain/entities/Category';
import { CategoryRepository } from 'apps/hexagonal/src/core/domain/ports/CategoryRepository';

export class PostgresCategoryRepository implements CategoryRepository {
  create(category: Category): Promise<Category> {
    throw new Error('Method not implemented.');
  }
}
