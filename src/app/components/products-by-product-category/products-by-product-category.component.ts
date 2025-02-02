import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-by-product-category',
  templateUrl: './products-by-product-category.component.html',
  styleUrls: ['./products-by-product-category.component.css'],
})
export class ProductsByProductCategoryComponent implements OnInit {
  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}
  categoryId: number = 1;
  products: Product[] = [];

  ngOnInit(): void {
    // this.productsService
    //   .getProductsByCategory(this.categoryId)
    //   .subscribe((data) => {
    //     this.products = data;
    //   });

    this.route.paramMap.subscribe(() => this.listProducts());
  }

  listProducts() {
    // check if "id" parameter is available
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    if (hasCategoryId) {
      // get the "id" param string. convert string to a number using the "+" symbol
      this.categoryId = +this.route.snapshot.paramMap.get('id')!;
    } else {
      // not category id available ... default to category id 1
      this.categoryId = 1;
    }

    // now get the products for the given category id
    this.productsService
      .getProductsByCategory(this.categoryId)
      .subscribe((data) => {
        this.products = data;
      });
  }

  // listProducts() {
  //   if (this.route.snapshot.paramMap.has('id')) {
  //     this.categoryId = +this.route.snapshot.paramMap.get('id')!;
  //   } else {
  //     this.categoryId = 1;
  //   }

  //   console.log('category id is: ', this.categoryId);

  //   this.productsService
  //     .getProductsByCategory(this.categoryId)
  //     .subscribe((data) => {
  //       this.products = data;
  //     });
  // }

  // listProductsByCategory() {
  //   if (this.route.snapshot.paramMap.has('id')) {
  //     this.categoryId = +this.route.snapshot.paramMap.get('id')!;
  //   } else {
  //     this.categoryId = 1;
  //   }

  //   console.log('category id is: ', this.categoryId);

  //   this.productsService
  //     .getProductsByCategory(this.categoryId)
  //     .subscribe((data) => {
  //       this.products = data;
  //     });
  // }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
