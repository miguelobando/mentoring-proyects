import { Entity, Column, ManyToMany, JoinTable, PrimaryColumn } from 'typeorm';
import { Category } from './category.entity';

@Entity()
export class Product {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  availability: boolean;

  @ManyToMany((type) => Category, (category) => category.products, {
    cascade: true,
  })
  @JoinTable() // required/implicit for M-M
  categories: Category[];

  @Column()
  brand: string;

  @Column('simple-array')
  images: string[];
}
