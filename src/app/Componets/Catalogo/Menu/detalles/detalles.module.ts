import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetallesComponent } from './detalles.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
    declarations:[
        DetallesComponent,
        
    ],
    imports:[
        CommonModule,
        MatDialogModule,
        MatPaginatorModule,
    ],
    exports: [
        DetallesComponent
    ]
})
export class DetallesModule{}