// importar modulos del router Angular 
import { ModuleWithProviders } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

// importar todos los componenetes que uilizaremos
import { HomeComponent } from './components/home/home.component';
import { CuentaUsuarioComponent } from './components/cuenta-usuario/cuenta-usuario.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import{ CuentasComponent} from './components/cuentas/cuentas.component';
// ruta
const appRoutes: Routes =[
    {path: 'home', component: HomeComponent},
    {path: 'cuentaUsuario', component: CuentaUsuarioComponent},
    {path: 'reportes', component: ReportesComponent },
    {path: 'cuentas', component: CuentasComponent }


];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot( appRoutes );








