import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  route;
  hideTopBar = false;;
  constructor(private router: Router){
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.route = event.url;
        if(this.route === '/login'){
          this.hideTopBar = true;
        }else{
          this.hideTopBar = false;
        }
        console.log(this.route)
    }
    })
  }

  ngOnInit() {
  }
}
