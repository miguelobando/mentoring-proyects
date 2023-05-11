import { CreateCategoryDto } from '../../shared/dto/CreateCategory';
import { Category } from '../domain/entities/Category';
import { CategoryId } from '../domain/entities/CategoryId';
import { CategoryRepository } from '../domain/ports/CategoryRepository';

export class CategoryUseCases {
  constructor(private readonly categoryRepository: CategoryRepository) {}
  async create(newCategory: CreateCategoryDto) {
    const category = new Category(new CategoryId());
    category.name = newCategory.name;
    category.description = newCategory.description;
    return this.categoryRepository.create(category);
  }
}
