import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TentangKamiComponent } from './tentang-kami.component';
import { RouterModule } from '@angular/router';
import { TentangKamiRoutingModule } from './tentang-kami-routing.module';



@NgModule({
  declarations: [
    TentangKamiComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TentangKamiRoutingModule
  ],
  exports: [
    TentangKamiComponent
  ]
})
export class TentangKamiModule { }
