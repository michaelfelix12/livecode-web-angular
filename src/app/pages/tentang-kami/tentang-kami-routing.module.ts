import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TentangKamiComponent } from "./tentang-kami.component";

const routes: Routes = [
  {
    path: '',
    component: TentangKamiComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TentangKamiRoutingModule { }
