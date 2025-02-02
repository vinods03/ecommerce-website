import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css'],
})
export class CartDetailsComponent implements OnInit {
  constructor(private cartService: CartService) {}
  cartItems: Product[] = [];
  total_quantity: number = 0;
  total_price: number = 0;

  ngOnInit(): void {
    this.cartItems = this.cartService.cartItems;

    this.cartService.totalQuantity.subscribe((data) => {
      this.total_quantity = data;
    });

    this.cartService.totalPrice.subscribe((data) => {
      this.total_price = data;
    });
  }
}
