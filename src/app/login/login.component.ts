import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/utils/auth-service.service';
import { first } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authenticationService: AuthServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }
  uName;
  password;

  login() {

    this.authenticationService.login(this.uName, this.password)
      .pipe(first())
      .subscribe(
      data => {
        this.router.navigate(['/home']);
      },
      error => {
        console.log('test')
      });
  }

}
