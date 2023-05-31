import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanvaComponent } from './canva/canva.component';
import { ReviewFormComponent } from './review-form/review-form.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
    declarations: [
        CanvaComponent,
        ReviewFormComponent
    ],
  exports: [
    CanvaComponent,
    ReviewFormComponent
  ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ]
})
export class ComponentsModule { }
