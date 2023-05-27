import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanvaComponent } from './canva/canva.component';



@NgModule({
    declarations: [
        CanvaComponent
    ],
    exports: [
        CanvaComponent
    ],
    imports: [
        CommonModule
    ]
})
export class ComponentsModule { }
