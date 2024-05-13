import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { DirectorioComponent } from './institucional/datos/directorio/directorio.component';
import { NofoundComponent } from './pages/nofound/nofound.component';
import { EjecutivoComponent } from './institucional/datos/ejecutivo/ejecutivo.component';
import { EstructuraComponent } from './institucional/datos/estructura/estructura.component';


const routes: Routes = [
  { path : "", component : MainComponent },
  { path : "ejecutivo", component : EjecutivoComponent },
  { path : "estructura", component: EstructuraComponent},
  { path : "directorio", component: DirectorioComponent},
  { path : "**", component : NofoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
