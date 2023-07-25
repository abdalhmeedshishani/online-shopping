import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../interfaces/product.model';
import { CartService } from '../services/cart.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  products: Product[] = [];
  fullQuantity: number = this.cartService.fullQuantity;
  displayedColumns: string[] = [
    'product_img',
    'product_name',
    'product_price',
    'product_quantity',
    'totalPrice',
    'removeProduct',
  ];
  @Input() dataSource = new MatTableDataSource<Product>();

  constructor(
    public cartService: CartService,
    public activeModal: NgbActiveModal
  ) {}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe({
      next: (res) => {
        this.dataSource.data = res;
      },
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  increaseQuantity(product: Product) {
    this.cartService.increaseQuantity(product);
  }

  reduceQuantity(product: Product) {
    this.cartService.reduceQuantity(product);
    if (product.product_quantity == 0) {
      this.removeCartProduct(product);
    }
  }

  removeCartProduct(product: Product) {
    this.cartService.removeCartProduct(product);
    this.dataSource._updateChangeSubscription();
  }
}
