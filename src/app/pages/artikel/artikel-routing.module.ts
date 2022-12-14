import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ArtikelComponent } from "./artikel.component";

const routes: Routes = [
  {
    path: '',
    component: ArtikelComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtikelRoutingModule { }
