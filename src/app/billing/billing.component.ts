import { Component, OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { CartItemsService } from 'src/app/cart/cart-items.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit, OnDestroy {

  cartList;
  total;
  ngOnDestroy(): void {
    console.log(this.model);
    localStorage.setItem('model', JSON.stringify(this.model))
  }
  constructor(private cartItemsService: CartItemsService) { }
  model = {};
  ngOnInit() {
    if(localStorage.getItem('model')){
      this.model = JSON.parse(localStorage.getItem('model'));
    }
    this.cartItemsService.cartListSource$.subscribe((data)=>{
      this.cartList = data;
      let total = 0;
      data.forEach((element : any) => {
        total = total + element.price;
      });
      this.total  = total;
    })
    }

}
