// importar modulos del router Angular 
import { ModuleWithProviders } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';


// importar todos los componenetes que uilizaremos
import { HomeComponent } from './home/home.component';
import { GestionComponent } from './gestion/gestion.component';
//import { VideojuegoComponent } from './videojuego/videojuego.componet';

// ruta
const appRoutes: Routes =[
    {path: 'gestiones', component: GestionComponent},
    {path: '**', component: HomeComponent}

];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot( appRoutes );








