import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';
=======

import { routing, appRoutingProviders } from './app.routing';
  
>>>>>>> dece8fa1fb342bf18fef12fb32c4dff83f20fe33
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { CuentaUsuarioComponent } from './components/cuenta-usuario/cuenta-usuario.component';
<<<<<<< HEAD
import { CuentasComponent } from './components/cuentas/cuentas.component';
=======
import { GestionarComponent } from './components/gestionar/gestionar.component';
>>>>>>> dece8fa1fb342bf18fef12fb32c4dff83f20fe33

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReportesComponent,
    CuentaUsuarioComponent,
<<<<<<< HEAD
    CuentasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    FormsModule
  ],
  providers: [appRoutingProviders],
=======
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
>>>>>>> dece8fa1fb342bf18fef12fb32c4dff83f20fe33
  bootstrap: [AppComponent]
})
export class AppModule { }
