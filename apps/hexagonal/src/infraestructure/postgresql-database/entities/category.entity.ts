import { Column, Entity, ManyToMany, PrimaryColumn } from 'typeorm';
import { Product } from './product.entity';

@Entity()
export class Category {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @ManyToMany((type) => Product, (product) => product.categories)
  products: Product[];
}
