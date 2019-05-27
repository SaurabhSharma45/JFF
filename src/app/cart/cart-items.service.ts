import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartItemsService {

  private cartItmes : Array<any> = [];

  // cartItmesSource list source
  private cartItmesSource = new BehaviorSubject<Array<string>>(this.cartItmes);
  cartListSource$ = this.cartItmesSource.asObservable();

  setCartItmes (list : Array<string>) : void{
    this.cartItmes = [].concat(list);
    this.cartItmesSource.next(this.cartItmes);
  }
  addToCartItmes(item : any):void {
    this.cartItmes.push(item);
    this.cartItmesSource.next(this.cartItmes);
  }
  removerFromCartList(item) : void{
    let index = this.cartItmes.findIndex(x => x.code === item.code);
    //let index = this.cartItmes.indexOf(item.index);
    if(index > -1){
      this.cartItmes.splice(index, 1);
      this.cartItmesSource.next(this.cartItmes);
    }
  }

  constructor() { }
}
