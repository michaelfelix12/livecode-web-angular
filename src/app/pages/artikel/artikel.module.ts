import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtikelComponent } from './artikel.component';
import { RouterModule } from '@angular/router';
import { ArtikelRoutingModule } from './artikel-routing.module';



@NgModule({
  declarations: [
    ArtikelComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ArtikelRoutingModule
  ],
  exports: [
    ArtikelComponent
  ]
})
export class ArtikelModule { }
