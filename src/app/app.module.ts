import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { CuentaUsuarioComponent } from './components/cuenta-usuario/cuenta-usuario.component';
import { CuentasComponent } from './components/cuentas/cuentas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReportesComponent,
    CuentaUsuarioComponent,
    CuentasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    FormsModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
