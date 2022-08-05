import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OffersComponent } from './offers/offers.component';
import { SubscribtionsComponent } from './subscribtions/subscribtions.component';

const routes: Routes = [
	{path: '', component: LoginComponent},
	{path: 'offers', component: OffersComponent},
	{path: 'subscribtions/:id', component: SubscribtionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
