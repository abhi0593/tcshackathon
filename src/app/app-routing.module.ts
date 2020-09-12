import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard-front/dashboard.component';
import { CounterpartyDetailComponent } from './dashboard/counterparty-detail/counterparty-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path:'dashboard', component:DashboardComponent},
  {path:'detail/:id',component:CounterpartyDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
