import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CuentasComponent } from './components/cuentas/cuentas.component';
import { GeneradorReportesComponent } from './components/generador-reportes/generador-reportes.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home' , component: HomeComponent},
  {path: 'cuentas', component: CuentasComponent},
  {path: 'generadorReportes', component: GeneradorReportesComponent},
  {path: '**' , redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
