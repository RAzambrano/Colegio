import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DasboardComponent} from './vistas/dasboard/dasboard.component';
import {ProfesoresComponent} from './vistas/profesores/profesores.component';

const routes: Routes = [
  {path:'', redirectTo:'inicio', pathMatch:'full'},
  {path:'inicio', component:DasboardComponent },
  {path:'profesores', component:ProfesoresComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DasboardComponent,ProfesoresComponent]
