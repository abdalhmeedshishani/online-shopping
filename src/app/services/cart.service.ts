import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  products: Product[] = [];
  fullQuantity = 5;
  cartCount: number = 0;
  public productList = new BehaviorSubject<Product[]>([]);

  constructor() {}

  increaseQuantity(product: Product): number {
    if (product.product_quantity === this.fullQuantity) {
      return product.product_quantity;
    }
    product.product_quantity += 1;
    return product.product_quantity;
  }

  reduceQuantity(product: Product): number {
    if (product.product_quantity === this.fullQuantity) {
      product.product_quantity -= 1;
      return product.product_quantity;
    }
    product.product_quantity -= 1;
    return product.product_quantity;
  }

  getProducts(): Observable<Product[]> {
    return this.productList.asObservable();
  }

  addtoCart(product: Product) {
    let index = this.products.findIndex(
      (item) => item.product_id === product.product_id
    );

    if (index == -1) {
      this.products.push(product);
      this.productList.next(this.products);
      this.countCartProducts();
    } else {
      product.product_quantity += 1;
    }
  }

  getTotalPrice(): number {
    let grandTotal = 0;
    this.products.map((a: Product) => {
      grandTotal += a.product_price;
    });
    return grandTotal;
  }

  removeCartProduct(product: Product) {
    let index = this.products.findIndex(
      (item) => item.product_id === product.product_id
    );
    this.products.splice(index, 1);
    product.product_quantity = 1;
    this.countCartProducts();
  }

  countCartProducts() {
    for (
      this.cartCount = 0;
      this.cartCount < this.products.length;
      this.cartCount++
    ) {
      this.cartCount;
    }
    return this.cartCount;
  }
}
