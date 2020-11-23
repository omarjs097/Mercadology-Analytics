import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { CuentaUsuarioComponent } from './components/cuenta-usuario/cuenta-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReportesComponent,
    CuentaUsuarioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
