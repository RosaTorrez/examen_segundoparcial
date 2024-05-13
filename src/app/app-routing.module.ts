import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { DirectorioComponent } from './institucional/datos/directorio/directorio.component';
import { NofoundComponent } from './pages/nofound/nofound.component';
import { EjecutivoComponent } from './institucional/datos/ejecutivo/ejecutivo.component';
import { EstructuraComponent } from './institucional/datos/estructura/estructura.component';
import { DatosComponent } from './institucional/datos/datos/datos.component';
import { GeograficaComponent } from './institucional/datos/geografica/geografica.component';


const routes: Routes = [
  {path : '',
    children: [

  
  { path : "", component : MainComponent },
  { path: 'intitucional',
      children:[
            {
              path: 'datos',
              component: DatosComponent
            },
            {
              path: 'situacionGeografica',
              component: GeograficaComponent
            },
            {
              path: 'geografica',
              component: GeograficaComponent
            },
            {
              path: 'ejecutivo',
              component: EjecutivoComponent
            },
            {
              path: 'estructura',
              component: EstructuraComponent
            },
          ]
        }
      ]
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
