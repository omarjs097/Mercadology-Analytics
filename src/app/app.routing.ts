// importar modulos del router Angular 
import { ModuleWithProviders } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

<<<<<<< HEAD
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
=======

// importar todos los componentes que uilizaremos
import { HomeComponent } from './components/home/home.component';
import { GestionarComponent } from './components/gestionar/gestionar.component';

import { ReportesComponent } from './components/reportes/reportes.component';
import { CuentaUsuarioComponent } from './components/cuenta-usuario/cuenta-usuario.component';

// ruta
const appRoutes: Routes =[
    {path: 'Home', component: HomeComponent},
    {path: 'Gestion', component: GestionarComponent},
    {path: 'Usuario', component: CuentaUsuarioComponent},
    {path: 'Reporte', component: ReportesComponent}
>>>>>>> dece8fa1fb342bf18fef12fb32c4dff83f20fe33


];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot( appRoutes );








