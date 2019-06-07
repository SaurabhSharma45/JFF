import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BillingComponent } from './billing/billing.component';
import { ProvisionComponent } from './provision/provision.component';
import { LoginComponent } from 'src/app/login/login.component';
import { AuthGuardService } from 'src/app/utils/auth-guard.service';
import { UserListComponent } from 'src/app/user-list/user-list.component';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: '',  pathMatch: 'full', redirectTo: '/home' },
      //{ path: '**', redirectTo: '/dtw' },
      { path: 'home', component : HomeComponent,canActivate: [AuthGuardService]},
      { path: 'login', component : LoginComponent},
      { path: 'billing', component : BillingComponent,canActivate: [AuthGuardService]},
      {path :'provision' , component : ProvisionComponent,canActivate: [AuthGuardService]},
      {path : 'userlist', component : UserListComponent, canActivate: [AuthGuardService], data : {"role":"admin"}}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, initialNavigation: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }