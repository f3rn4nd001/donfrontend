import { NgModule } from '@angular/core';
import { RegistrarComponent } from "./registrar.component";
import { RegistrarRoutingModule } from "./registrar-routing.module";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input'
import { NgxSpinnerModule } from "ngx-spinner";
import { DetallesModule } from '../detalles/detalles.module';
@NgModule({
    declarations:[
        RegistrarComponent,
        
    ],
    imports:[
        CommonModule,
        DetallesModule,
        RegistrarRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        NgxSpinnerModule,
    ]
})
export class RegistrarModule{}