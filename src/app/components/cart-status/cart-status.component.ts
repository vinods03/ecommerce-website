import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-status',
  templateUrl: './cart-status.component.html',
  styleUrls: ['./cart-status.component.css'],
})
export class CartStatusComponent implements OnInit {
  constructor(private cartService: CartService) {}

  total_quantity: number = 0;
  total_price: number = 0;

  ngOnInit(): void {
    this.cartService.totalQuantity.subscribe((data) => {
      this.total_quantity = data;
    });

    this.cartService.totalPrice.subscribe((data) => {
      this.total_price = data;
    });
  }
}
