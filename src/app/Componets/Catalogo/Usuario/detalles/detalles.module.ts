import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetallesComponent } from './detalles.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
    declarations:[
        DetallesComponent,
        
    ],
    imports:[
        CommonModule,
        MatDialogModule,
    ],
    exports: [
        DetallesComponent
    ]
})
export class DetallesModule{}