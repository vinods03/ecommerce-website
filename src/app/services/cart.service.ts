import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Country } from '../models/country';
import { State } from '../models/state';
import { Purchase } from '../models/purchase';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  constructor(private httpClient: HttpClient) { }
  
  cartItems: Product[] = []

  totalQuantityValue: number = 0
  totalPriceValue: number = 0.00

  totalPrice: Subject<number> = new BehaviorSubject<number>(0)
  totalQuantity: Subject<number> = new BehaviorSubject<number>(0)

  private countriesUrl = 'https://z5evk1aln4.execute-api.us-east-1.amazonaws.com/prod/countries'
  private statesByCountryUrl = 'https://z5evk1aln4.execute-api.us-east-1.amazonaws.com/prod/states/'
  private createOrderUrl = 'https://z5evk1aln4.execute-api.us-east-1.amazonaws.com/prod/purchase'

  months: number[] = []
  years: number[] = []

  getCountries(): Observable<Country[]> {
    return this.httpClient.get<Country[]>(this.countriesUrl)
  }

  getStatesByCountry(country_id: number): Observable<State[]> {
    // console.log('The API Url is: ', this.statesByCountryUrl+country_id)
    return this.httpClient.get<State[]>(this.statesByCountryUrl+country_id)
  }

  getMonths(): Observable<number[]> {
    for (let i = 1; i <= 12; i++) {
      this.months.push(i) 
    }

    return of(this.months)
  }

  getYears(): Observable<number[]> {
    let startYear: number = new Date().getFullYear()
    for (let j = startYear; j <= startYear+10; j++) {
      this.years.push(j)
    }

    return of(this.years)
  }

  getCartItems():Observable<Product[]> {
    return of(this.cartItems)
  }

  addToCart(product: Product) {

    this.cartItems.push(product)
    this.calculateTotals(product)  

  }

  calculateTotals(product: Product) {

    this.totalQuantityValue = this.cartItems.length
    this.totalPriceValue = this.totalPriceValue + product.unit_price

    this.totalQuantity.next(this.totalQuantityValue);
    this.totalPrice.next(this.totalPriceValue);
      
    // alert(this.totalQuantityValue)
    // alert(this.totalPriceValue)
  }

  createOrder(purchase: Purchase) {
    return this.httpClient.post(this.createOrderUrl,purchase)
  }

  
}

