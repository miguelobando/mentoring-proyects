import { Entity } from '../../../shared/seedwork/Entity';
import { Category } from './Category';
import { ProductId } from './ProductId';

export class Product extends Entity<ProductId> {
  name: string;
  description: string;
  price: number;
  availability: boolean;
  categories: Category[];
  brand: string;
  images: string[];
}
