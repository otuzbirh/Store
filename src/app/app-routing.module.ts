import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { ProductListComponent } from './product-list/product-list.component';


//http://localhost:4200/ + path
const routes: Routes = [
  {
    //http://localhost:4200
    path: '',
    component: ProductListComponent 
  },
  {
    //http://localhost:4200/checkout
    path: 'checkout',
    component: CartComponent
  },
  {
    //http://localhost:4200/products/101
    //http://localhost:4200/products/102 ...
    path: 'products/:productId',
    component: ProductInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
