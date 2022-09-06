import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../Entity/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  // get request
  async all(): Promise<Product[]> {
    return this.productRepository.find();
  }

  //post request service
  async createProduct(data): Promise<Product> {
    return this.productRepository.save(data);
  }

  //get product by id
  async getProductById(id: number): Promise<Product> {
    return this.productRepository.findOneBy({
      id,
    });
  }

  //update product with their id
  async updateProduct(id: number, data): Promise<any> {
    return this.productRepository.update(id, data);
  }

  //delete product with their id
  async deleteProduct(id: number): Promise<any> {
    return this.productRepository.delete(id);
  }
}
