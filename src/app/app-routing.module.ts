import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './pages/inicio/inicio.component';
import { DatosComponent } from './institucional/datos/datos/datos.component';
import { DirectorioComponent } from './institucional/datos/directorio/directorio.component';
import { EjecutivoComponent } from './institucional/datos/ejecutivo/ejecutivo.component';
import { EstructuraComponent } from './institucional/datos/estructura/estructura.component';
import { GeograficaComponent } from './institucional/datos/geografica/geografica.component';
const routes: Routes = [
 
  { path : "inicio", component : InicioComponent},
  { path : "datos", component : DatosComponent},
  { path : "directorio", component : DirectorioComponent}, 
  { path : "ejecutivo", component : EjecutivoComponent}, 
  { path : "estructura", component : EstructuraComponent},
  { path : "geografica", component : GeograficaComponent},      

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
