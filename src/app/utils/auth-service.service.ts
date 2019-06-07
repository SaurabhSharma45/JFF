import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, take } from 'rxjs/operators';
import decode from 'jwt-decode';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient, private _router: Router) {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    let tokenPayload;
    if(currentUser){
      tokenPayload = decode(currentUser.token).user;
    }else{
      tokenPayload = null;
    }
    
    this.currentUserSubject = new BehaviorSubject<any>(tokenPayload);
    this.currentUser = this.currentUserSubject.asObservable();
  }
  public get currentUserValue() {
    return this.currentUserSubject.value;
  }
  isAuthenticated():boolean{
    return true;
  }
  login(username: string, password: string) {
    return this.http.post<any>(`http://localhost:5000/api/login`, { username, password })
        .pipe(map(user => {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                
                let tokenPayload = decode(user.token);
                this.currentUserSubject.next(tokenPayload.user);
            }

            return user;
        }));
}

logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this._router.navigate(['/login']);
}
}
