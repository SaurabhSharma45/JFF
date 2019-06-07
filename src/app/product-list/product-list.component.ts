import { Component, OnInit } from '@angular/core';
import { CartItemsService } from 'src/app/cart/cart-items.service';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/utils/auth-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private cartItemsService: CartItemsService,
    private router: Router,
    private authenticationService: AuthServiceService,) { }
  public productlist : any[] = [
    {
      productname : 'JBL Flip 4',
      code : 'cat1-0001',
      price : 18.01,
      cartprice : 0,
      available : 10,
      qty : 0
    }, {
      productname : 'Bose Sound Link',
      code : 'cat1-0010',
      price : 129.05,
      cartprice : 0,
      available : 9,
      qty : 0
    }, {
      productname : 'AB Portable',
      code : 'cat1-0008',
      price : 19.78,
      cartprice : 0,
      available : 11,
      qty : 0
    }, {
      productname : 'AE-9 Portable',
      code : 'cat1-0011',
      price : 299.99,
      cartprice : 0,
      available : 8,
      qty : 0
    }, {
      productname : 'JBL Pulse 3',
      code : 'cat1-0009',
      price : 23.05,
      cartprice : 0,
      available : 10,
      qty : 0
    }
  ];
  role;
  add_product_var = false;
  product = {qty : 0, productname : '', code : '', price : 0};
  productname;
  addToCart(item){
    item.qty = ++item.qty;
    this.cartItemsService.addToCartItmes(item);
  }
  removeFromCart(item){
    item.qty = --item.qty;
    this.cartItemsService.removerFromCartList(item)
  }
  ngOnInit() {
    this.cartItemsService.cartListSource$.subscribe((data)=>{
      this.productlist.forEach((element)=>{
        data.forEach((ele:any)=>{
          if(element.code === ele.code){
            element.qty = ele.qty;
          }
        })
      })
    });
    let user = this.authenticationService.currentUserValue;
    if(user){
      this.role = user.role;
    }
  }
  moveToCheckout(){
    this.router.navigate(['/billing']);
  }
  add_product(){
    this.add_product_var = true;

  }
  addToList(item){
    this.productlist.push(this.product);
    this.product = {qty : 0, productname : '', code : '', price : 0};
    this.add_product_var = false;
  }
  cancle_addToList(){
    this.add_product_var = false;
  }

}
