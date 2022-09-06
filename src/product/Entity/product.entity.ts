import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'product_id',
  })
  id: number;
  @Column({
    nullable: false,
    default: '',
  })
  title: string;
  @Column({
    default: 'no image',
  }) // column decorator marks a specific class property as a table column
  image: string;
  @Column({
    default: 0,
    nullable: false,
  })
  likes: number;
}
