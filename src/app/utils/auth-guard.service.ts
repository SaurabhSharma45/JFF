import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/utils/auth-service.service';
import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate  {


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    const currentUser = this.authenticationService.currentUserValue;
    let role = route.data.role;
  

    if (currentUser && (currentUser.role === role || !role)) {
      return true;
  }

  // navigate to login page
  this._router.navigate(['/login']);
  // you can save redirect url so after authing we can move them back to the page they requested
  return false;
  }

  constructor(private authenticationService: AuthServiceService, private _router: Router) { }
}
