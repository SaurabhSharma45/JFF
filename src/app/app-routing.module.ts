import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BillingComponent } from './billing/billing.component';
import { ProvisionComponent } from './provision/provision.component';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: '',  pathMatch: 'full', redirectTo: '/home' },
      //{ path: '**', redirectTo: '/dtw' },
      { path: 'home', component : HomeComponent},
      { path: 'billing', component : BillingComponent},
      {path :'provision' , component : ProvisionComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, initialNavigation: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }