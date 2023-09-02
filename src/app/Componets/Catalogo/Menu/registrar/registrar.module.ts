import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrarRoutingModule } from "./registrar-routing.modules";
import { RegistrarComponent } from "./registrar.component";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MatSelectModule } from '@angular/material/select';
import { DetallesModule } from '../detalles/detalles.module';
import { SelectEstatusModule } from "../../../Plantillas/Select/select-estatus/select-estatus.module";
@NgModule({
    declarations:[
        RegistrarComponent,
            
    ],
    imports:[
    CommonModule,
    RegistrarRoutingModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    MatSelectModule,
    DetallesModule,
    SelectEstatusModule
    ]
})
export class RegistrarModule{}