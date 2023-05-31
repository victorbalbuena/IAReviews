import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { MainComponent } from './main/main.component';
import {SharedModule} from "../shared/shared.module";
import {RouterModule, RouterOutlet} from "@angular/router";
import {ComponentsModule} from "../components/components.module";
import {OpenaiService} from "../services/openai.service";

@NgModule({
  declarations: [
    PagesComponent,
    MainComponent
  ],
  exports: [
    PagesComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ComponentsModule
  ],
  providers: [OpenaiService]
})
export class PagesModule { }
