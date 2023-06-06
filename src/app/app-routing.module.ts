import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from "./page404/page404.component";
import { PagesRoutingModule } from "./pages/pages-routing.module";

const routes: Routes = [
  { path: '', redirectTo: '/create', pathMatch: 'full' },
  { path: '**', redirectTo: '/create', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
