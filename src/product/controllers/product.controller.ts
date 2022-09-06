import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { title } from 'process';
import { ProductService } from '../Services/product.service';

@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}

  //get req business logic
  @Get()
  all() {
    return this.productService.all();
  }

  //create req business logic
  @Post()
  async createProduct(@Body() Body) {
    return this.productService.createProduct(
      Body,
      //   image,
    );
  }

  // get product by id
  @Get(':productId')
  async getProductById(@Param('productId') id: number) {
    return this.productService.getProductById(id);
  }

  //update product by their id
  @Put(':productId')
  async updateProduct(@Param('productId') id: number, @Body() Body) {
    return this.productService.updateProduct(id, Body);
  }

  //delete product by their id
  @Delete(':productId')
  async deleteProducts(@Param('productId') id: number) {
    return this.productService.deleteProduct(id);
  }
}
