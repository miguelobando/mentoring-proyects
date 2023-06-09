import { AsociateCategoryDto } from '../../shared/dto/AsociateCategoryDto';
import { CreateProductDto } from '../../shared/dto/CreateProduct';
import { Product } from '../domain/entities/Product';
import { ProductId } from '../domain/entities/ProductId';
import { CategoryRepository } from '../domain/ports/CategoryRepository';
import { ProductRepository } from '../domain/ports/ProductRepository';

export class ProductUseCases {
  constructor(
    private readonly productRepository: ProductRepository,
    private readonly categoryRepository: CategoryRepository,
  ) {}
  async create(newProduct: CreateProductDto) {
    const product = new Product(new ProductId());
    product.name = newProduct.name;
    product.description = newProduct.description;
    product.price = newProduct.price;
    product.availability = newProduct.availability;
    product.brand = newProduct.brand;
    product.images = newProduct.images;
    return this.productRepository.create(product);
  }

  async asociateCategory(dto: AsociateCategoryDto) {
    const categoriesToAsociate = await Promise.all(
      dto.categories.map(async (category) => {
        return await this.categoryRepository.findById(category);
      }),
    );
    const product = await this.productRepository.findById(dto.productId);
    product.categories = categoriesToAsociate;
    return this.productRepository.save(product);
  }
}
