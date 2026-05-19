import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public amount: number = 0;
  public total: number = 0;
  constructor() { }
}

