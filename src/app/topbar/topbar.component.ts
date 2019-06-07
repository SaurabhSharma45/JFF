import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/utils/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor(private authenticationService: AuthServiceService, private _router: Router) { }
  role;
  ngOnInit() {
    let user = this.authenticationService.currentUserValue;
    if(user){
      this.role = user.role;
    }
  }
  logout(){
    this.authenticationService.logout();
  }

}
