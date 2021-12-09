import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';
import { Product } from './../models/product.model';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css'],
  
})
export class ProductInfoComponent implements OnInit, OnDestroy {


  public prod!: Product;

private paramMapSub: Subscription;

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private cartService: CartService
              ) {

   this.paramMapSub = this.route.paramMap.subscribe(params => {
     const pId: number =  Number(params.get('productId'));

     this.prod = this.productService.getProducts()
      .filter(p => p.productId === pId)[0];
    });
    
   }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    if(this.paramMapSub != null) {
      // this.paramMapSub.unsubscribe();
      // this.paramMapSub = null;
    }
  }

  public addToCart() {
    this.cartService.addToCart(this.prod);
  }

}
