import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { DragComponent } from './components/drag/drag.component';
import { VirtualComponent } from './components/virtual/virtual.component';
import { PaisesComponent } from './components/paises/paises.component';

const routes: Routes = [

  { path: 'virtual', component: VirtualComponent },
  {path: 'drag', component: DragComponent},
  {path: 'paises', component: PaisesComponent },
  {path: '**', redirectTo: 'virtual'}

]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
