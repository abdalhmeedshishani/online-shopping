import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Product } from './interfaces/product.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from './cart/cart.component';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'shopping-cart';
  products: Product[] = [];
  public isCollapsed = false;

  constructor(
    private modalService: NgbModal,
    public cartService: CartService
  ) {}
  ngOnInit(): void {}

  openTheDiolog() {
    this.modalService.open(CartComponent, {
      backdropClass: 'light-blue-backdrop',
      size: 'lg',
    });
  }
}
