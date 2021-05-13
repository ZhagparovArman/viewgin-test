import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationComponent } from './authorization/authorization.component';
import { DonutChartComponent } from './donut-chart/donut-chart.component';
import { AuthGuard } from './helpers/auth-guard.guard';
import { LinearChartComponent } from './linear-chart/linear-chart.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent, 
    canActivate: [AuthGuard], 
    children: [
      {
        path: '', 
        component: LinearChartComponent, 
      },
      {
        path: 'donut',
        component: DonutChartComponent,
      },
    ], 
  },
  { path: 'login', component:  AuthorizationComponent},
  { path: '**', redirectTo: '' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
