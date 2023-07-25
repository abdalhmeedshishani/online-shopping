import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product.model';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private productList: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.products = this.productList.getProducts();
  }

  addToCart(product: Product) {
    this.cartService.addtoCart(product);
  }
}
