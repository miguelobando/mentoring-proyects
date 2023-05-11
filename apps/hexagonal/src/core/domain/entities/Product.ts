import { Entity } from 'apps/hexagonal/src/shared/seedwork/Entity';
import { ProductId } from './ProductId';
import { Category } from './Category';

export class Produdct extends Entity<ProductId> {
  name: string;
  description: string;
  price: number;
  availability: boolean;
  categories: Category[];
  brand: string;
  images: string[];
}
