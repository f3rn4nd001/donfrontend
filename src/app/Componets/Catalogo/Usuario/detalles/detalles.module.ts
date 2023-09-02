import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetallesComponent } from './detalles.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

@NgModule({
    declarations:[
        DetallesComponent,
        
    ],
    imports:[
        CommonModule,
        MatDialogModule,
        MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    ],
    exports: [
        DetallesComponent
    ]
})
export class DetallesModule{}