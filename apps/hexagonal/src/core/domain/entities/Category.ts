import { Entity } from '../../../shared/seedwork/Entity';
import { CategoryId } from './CategoryId';

export class Category extends Entity<CategoryId> {
  name: string;
  description: string;
}
