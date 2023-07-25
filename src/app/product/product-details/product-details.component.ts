import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/interfaces/product.model';
import { HttpClient } from '@angular/common/http';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product!: Product;

  constructor(
    private cartService: CartService,
    private activatedRoute: ActivatedRoute,
    private productSvc: ProductService
  ) {}

  ngOnInit(): void {
    this.loadCarDetails();
  }

  addToCart(item: Product) {
    this.cartService.addtoCart(item);
  }

  private loadCarDetails() {
    let carId = this.setCarId();

    if (carId) {
      this.product = this.productSvc
        .getProducts()
        .find((c) => c.product_id == carId)!;
    }
  }

  private setCarId(): string {
    return String(this.activatedRoute.snapshot.paramMap.get('id'));
  }
}
