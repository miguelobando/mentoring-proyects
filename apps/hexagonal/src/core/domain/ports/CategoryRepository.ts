import { Category } from '../entities/Category';
export interface CategoryRepository {
  create(category: Category): Promise<Category>;
  findById(id: string): Promise<Category>;
}
