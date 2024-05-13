import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './commons/header/header.component';
import { FooterComponent } from './commons/footer/footer.component';
import { MainComponent } from './pages/main/main.component';
import { NofoundComponent } from './pages/nofound/nofound.component';
import { BanerComponent } from './commons/baner/baner.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { DatosComponent } from './institucional/datos/datos/datos.component';
import { GeograficaComponent } from './institucional/datos/geografica/geografica.component';
import { EjecutivoComponent } from './institucional/datos/ejecutivo/ejecutivo.component';
import { EstructuraComponent } from './institucional/datos/estructura/estructura.component';
import { DirectorioComponent } from './institucional/datos/directorio/directorio.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    NofoundComponent,
    BanerComponent,
    InicioComponent,
    DatosComponent,
    GeograficaComponent,
    EjecutivoComponent,
    EstructuraComponent,
    DirectorioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
