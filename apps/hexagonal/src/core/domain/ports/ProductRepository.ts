import { Product } from '../entities/Product';

export interface ProductRepository {
  create(product: Product): Promise<Product>;
  save(product: Product): Promise<Product>;
  findById(id: string): Promise<Product>;
}
