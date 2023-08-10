import { NgModule } from '@angular/core';
import { ConsultaComponent } from "./consulta.component";
import { ConsultaRoutingModule } from "./consulta-routing.module";
import { CommonModule } from '@angular/common';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { DetallesComponent } from "../detalles/detalles.component";
import { NgxSpinnerModule } from "ngx-spinner";
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule, } from "@angular/material/datepicker";
import { MatMomentDateModule } from '@angular/material-moment-adapter';
@NgModule({
    declarations:[
        ConsultaComponent,
        DetallesComponent
    
    ],
    imports:[
    CommonModule,
    ConsultaRoutingModule,
    MatExpansionModule,
    MatIconModule,
    MatMenuModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatDialogModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatMomentDateModule
    ]
})
export class ConsultaModule{}