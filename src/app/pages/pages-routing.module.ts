import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
const routes: Routes = [
  {
    path: 'beranda',
    loadChildren: () => import('./beranda/beranda.module').then(m => m.BerandaModule),
  },
  {
    path: 'artikel',
    loadChildren: () => import('./artikel/artikel.module').then(m => m.ArtikelModule),
  },
  {
    path: 'tentang-kami',
    loadChildren: () => import('./tentang-kami/tentang-kami.module').then(m => m.TentangKamiModule),
  },
  {
    path: '',
    redirectTo: 'beranda',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
