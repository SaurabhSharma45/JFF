import { Component, OnInit } from '@angular/core';
import { CartItemsService } from 'src/app/cart/cart-items.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartItemsService : CartItemsService) { }
  cartList = [];
  ngOnInit() {
    this.cartItemsService.cartListSource$.subscribe((data)=>{

    })
  }

}
