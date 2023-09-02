import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectEstatusComponent } from './select-estatus.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations:[
        SelectEstatusComponent,
        
    ],
    imports:[
        CommonModule,
        MatDialogModule,
        MatPaginatorModule,
        MatSelectModule,
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        SelectEstatusComponent
    ]
})
export class SelectEstatusModule{}