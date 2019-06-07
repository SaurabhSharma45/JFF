import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor() { }
  userList = [{name : "test", age:26, city : "Test"},{name : "test", age:26, city : "Test"},{name : "test", age:26, city : "Test"},{name : "test", age:26, city : "Test"},{name : "test", age:26, city : "Test"}]

  ngOnInit() {
  }

}
