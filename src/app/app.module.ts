import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing, appRoutingProviders } from './app.routing';
  
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { CuentaUsuarioComponent } from './components/cuenta-usuario/cuenta-usuario.component';
import { GestionarComponent } from './components/gestionar/gestionar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReportesComponent,
    CuentaUsuarioComponent,
    GestionarComponent
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
