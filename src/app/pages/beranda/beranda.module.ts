import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BerandaComponent } from './beranda.component';
import { ArtikelRegistComponent } from './artikel-regist/artikel-regist.component';
import { BannerComponent } from './banner/banner.component';
import { DeskripsiComponent } from './deskripsi/deskripsi.component';
import { AboutComponent } from './about/about.component';
import { FaqComponent } from './faq/faq.component';
import { KontakComponent } from './kontak/kontak.component';
import { ProdukComponent } from './produk/produk.component';
import { RouterModule } from '@angular/router';
import { BerandaRoutingModule } from './beranda-routing.module';

const components = [
  BerandaComponent,
  ArtikelRegistComponent,
  BannerComponent,
  DeskripsiComponent,
  AboutComponent,
  FaqComponent,
  KontakComponent,
  ProdukComponent
]

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    RouterModule,
    BerandaRoutingModule
  ],
  exports: [...components]
})
export class BerandaModule { }
