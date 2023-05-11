import { CategoryUseCases } from './CategoryUseCases';
import { CategoryRepository } from '../domain/ports/CategoryRepository';
import { Category } from '../domain/entities/Category';
import { CategoryId } from '../domain/entities/CategoryId';

describe('CategoryUseCases', () => {
  let categoryUseCases: CategoryUseCases;
  describe('CreateCategory', () => {
    test('should create a category', async () => {
      const categoryRepository: CategoryRepository = {
        create: jest
          .fn()
          .mockReturnValue(
            Promise.resolve<Category>(new Category(new CategoryId())),
          ),
      };
      categoryUseCases = new CategoryUseCases(categoryRepository);
      const result = await categoryUseCases.create({
        name: 'Category 1',
        description: 'Description 1',
      });
      // This can be done with a mock with all the values on  the categoryRepository
      expect(result).toBeTruthy();
    });
  });
});
