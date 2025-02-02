import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private router: Router,
    private cartService: CartService
  ) {}
  product_id_queried: number = 1;
  product!: Product;

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => this.retrieveProduct());
  }

  retrieveProduct() {
    this.product_id_queried = +this.route.snapshot.paramMap.get('id')!;
    this.productsService
      .getProductById(this.product_id_queried)
      .subscribe((data) => {
        this.product = data;
      });
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

  goBack() {
    this.router.navigate(['']);
  }
}
