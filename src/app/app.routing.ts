// importar modulos del router Angular 
import { ModuleWithProviders } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';


// importar todos los componenetes que uilizaremos
import { HomeComponent } from './home/home.component';
import { GestionarComponent } from './gestionar/gestionar.component';

import { Cuenta-usuarioComponent } from './cuenta-usuario/cuenta-usuario.component';
import { ReportesComponent } from './reportes/reportes.component';

// ruta
const appRoutes: Routes =[
    {path: '**', component: HomeComponent},
    {path: 'Gestion', component: GestionarComponent},
    {path: 'Usuario', component: Cuenta-usuarioComponent},
    {path: 'Resporte', component: ReportesComponent}


];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot( appRoutes );








