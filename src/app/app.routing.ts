// importar modulos del router Angular 
import { ModuleWithProviders } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';


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


];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot( appRoutes );








