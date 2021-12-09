import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../models/product.model';
import { CartService } from '../services/cart.service';
import { nameValidator } from './name.validators';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public items: Product[] = [];
  public checkoutForm: FormGroup;

  constructor(private cartService: CartService,
              private formBuilder: FormBuilder) {
    this.items = this.cartService.getItems();
    this.checkoutForm = this.formBuilder.group({
      name: ['', [Validators.required, nameValidator]],
      address: ['', [Validators.required, Validators.pattern('[0-9]+ [a-zA-Z0-9]+')]],
      email: ['', [Validators.required, Validators.email]]
    });
   }

  ngOnInit(): void {
  }

  public submitForm(data: any): void {
    console.log(data);
    if(this.checkoutForm.valid) {
    //   window.alert('Not valid!');
      console.log(data);
       return;
    } else {

    //send data to server app
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
    }
  }

  public  name() {
    return this.checkoutForm.get('name');
  }

  public  address() {
    return this.checkoutForm.get('address');
  }

  public  email() {
    return this.checkoutForm.get('email');
  }

}
