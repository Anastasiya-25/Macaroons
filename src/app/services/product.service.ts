import { Injectable } from '@angular/core';
import {ProductType} from "../types/product.type";

@Injectable()
export class ProductService {

  constructor() {}

    getProducts(): ProductType[] {
      return [
        {
          image: '1.png',
          title: 'Макарун с малиной',
          amount: '1 шт.',
          price: 1.70
        },
        {
          image: '2.png',
          title: 'Макарун с манго',
          amount: '1 шт.',
          price: 1.70
        },
        {
          image: '3.png',
          title: 'Пирог с ванилью',
          amount: '1 шт.',
          price: 1.70
        },
        {
          image: '4.png',
          title: 'Пирог с фисташками',
          amount: '1 шт.',
          price: 1.70
        },
      ];
    }

}
