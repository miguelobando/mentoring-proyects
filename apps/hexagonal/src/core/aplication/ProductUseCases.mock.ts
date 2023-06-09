import { Category } from '../domain/entities/Category';
import { CategoryId } from '../domain/entities/CategoryId';
import { Product } from '../domain/entities/Product';
import { ProductId } from '../domain/entities/ProductId';
import { CategoryRepository } from '../domain/ports/CategoryRepository';
import { ProductRepository } from '../domain/ports/ProductRepository';

const createProduct = jest.fn().mockImplementation((product: Product) => {
  return Promise.resolve<Product>(product);
});

const saveProduct = jest.fn().mockImplementation((product: Product) => {
  return Promise.resolve<Product>(product);
});

const findById = jest.fn().mockImplementation((id: string) => {
  return Promise.resolve<Product>(new Product(new ProductId(id)));
});

export const ProductRepositoryMock: ProductRepository = {
  create: createProduct,
  save: saveProduct,
  findById: findById,
};

const createCategory = jest.fn().mockImplementation((category: Category) => {
  return Promise.resolve<Category>(category);
});

const findByIdCategory = jest.fn((id: string) => {
  return Promise.resolve<Category>(new Category(new CategoryId(id)));
});

export const categoryRepositoryMock: CategoryRepository = {
  create: createCategory,
  findById: findByIdCategory,
};
