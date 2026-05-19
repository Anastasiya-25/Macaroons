import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {ProductType} from "../../types/product.type";

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: ProductType;
  @Output() addToCartEvent: EventEmitter<ProductType> = new EventEmitter<ProductType>();
  constructor() {
    this.product = {
      image: '',
      title: '',
      amount: '',
      price: 0
    }
  }

  ngOnInit(): void {
  }

  addToCart() {
    this.addToCartEvent.emit(this.product);
    alert(this.product.title + ' добавлен в корзину!');
  }

}
