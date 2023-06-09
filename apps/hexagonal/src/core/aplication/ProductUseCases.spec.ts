import { ProductUseCases } from './ProductUseCases';
import { ProductRepositoryMock } from './ProductUseCases.mock';
import { categoryRepositoryMock } from './ProductUseCases.mock';

describe('ProductUseCases', () => {
  let productUseCases: ProductUseCases;

  describe('CreateProduct', () => {
    test('should create a product', async () => {
      productUseCases = new ProductUseCases(
        ProductRepositoryMock,
        categoryRepositoryMock,
      );
      const result = await productUseCases.create({
        name: 'Product 1',
        description: 'Description 1',
        price: 10,
        availability: true,
        brand: 'Brand 1',
        images: ['image1', 'image2'],
      });
      expect(result).toBeTruthy();
    });

    // test('should asociate a category to a product', async () => {
    //   productUseCases = new ProductUseCases(
    //     ProductRepositoryMock,
    //     categoryRepositoryMock,
    //   );
    //   const result = await productUseCases.asociateCategory({
    //     productId: '1',
    //     categories: ['1', '2'],
    //   });
    //   expect(result).toBeTruthy();
    // });
  });
});
