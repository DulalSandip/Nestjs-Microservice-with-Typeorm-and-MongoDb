import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductController } from './product/controllers/product.controller';
import { Product } from './product/Entity/product.entity';
import { ProductModule } from './product/Module/product.module';
import { ProductService } from './product/Services/product.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'nest_admin',
      entities: [Product],
      synchronize: true,
    }),
    ProductModule, // product module should be in only import , not in controllers and providers section
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
