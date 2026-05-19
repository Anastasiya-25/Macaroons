import {Component, OnInit} from '@angular/core';
import {ProductType} from "./types/product.type";
import {FormValuesType} from "./types/form-values.type";
import {AdvantagesType} from "./types/advantages-type";
import {MediaType} from "./types/media.type";
import {ProductService} from "./services/product.service";
import {CartService} from "./services/cart.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ProductService]
})
export class AppComponent implements OnInit {
  title: string = 'Macaroons';
  public isOrderCreated: boolean = false;
  public advantages: AdvantagesType[] =
    [
      {
        title: 'Лучшие продукты',
        description: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители.'
      },
      {
        title: 'Много вкусов',
        description: 'Наша задача – предоставить вам широкое разнобразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок.'
      },
      {
        title: 'Бисквитное тесто',
        description: 'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!'
      },
      {
        title: 'Честный продукт',
        description: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г.'
      },
    ];

  public products: ProductType[] = [];

  constructor(private productService: ProductService, public cartService: CartService) {
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  public formValues: FormValuesType = {
    productTitle: '',
    name: '',
    phone: ''
  }

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: 'smooth'})
  }

  public addToCart(product: ProductType, target: HTMLElement): void {
    this.scrollTo(target);
    this.formValues.productTitle = product.title;
    this.cartService.amount++;
    this.cartService.total = this.cartService.total + product.price;
  }

  public createOrder(): void{
    console.log('Данные формы при отправке:', this.formValues);
    if (!this.formValues.productTitle) {
      alert('Заполните название!');
      return;
    }
    if (!this.formValues.name) {
      alert('Заполните имя!');
      return;
    }
    if (!this.formValues.phone) {
      alert('Заполните телефон!');
      return;
    }
    this.isOrderCreated = true;

    this.formValues = {
      productTitle: '',
      name: '',
      phone: ''
    }
  }

  public closePopup(): void {
    this.isOrderCreated = false;
  }

  public media: MediaType[] = [
    {
      image: 'instagram.png',
      text: 'Мы в Instagram'
    }
  ];

  public phone: number = 375293689868;

  public showPresent: boolean = true;
}
