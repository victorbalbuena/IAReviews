import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PagesComponent } from "./pages.component";
import {MainComponent} from "./main/main.component";

const routes: Routes = [
  {
    path: 'create',
    component: PagesComponent,
    children: [
      { path: '', component: MainComponent }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})

export class PagesRoutingModule { }
