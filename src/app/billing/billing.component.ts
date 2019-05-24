import { Component, OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    console.log(this.model);
    localStorage.setItem('model', JSON.stringify(this.model))
  }
  constructor() { }
  model = {};
  ngOnInit() {
    if(localStorage.getItem('model')){
      this.model = JSON.parse(localStorage.getItem('model'));
    }
    }

}
