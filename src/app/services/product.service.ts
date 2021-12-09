import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[];

  constructor() {
    this.products = [
      new Product(1, 'Huawei 30 Pro', 300, 'A large phone with one of the best screens'),
      new Product(2, 'iPhone 12', 1000, 'A large phone with one of the best cameras'),
      new Product(3, 'Samsung s20', 900, '')
    ];
  }


  public getProducts(): Product[] {
    return this.products;
  }

}
