import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { BerandaModule } from './beranda/beranda.module';
import { PagesRoutingModule } from './pages-routing.module';



@NgModule({
    declarations: [
      PagesComponent
    ],
    exports: [
      PagesComponent
    ],
    imports: [
        CommonModule,
        BerandaModule,
        PagesRoutingModule
    ]
})
export class PagesModule { }
