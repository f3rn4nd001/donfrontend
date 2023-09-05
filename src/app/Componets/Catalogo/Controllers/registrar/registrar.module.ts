import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrarComponent } from "./registrar.component";
import { RegistrarRoutingModule } from "./registrar-routing.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AutoSubMenuModule } from "../../../Plantillas/Autocomplete/auto-sub-menu/auto-sub-menu.module";
@NgModule({
    declarations:[
        RegistrarComponent
    ],
    imports:[ 
        CommonModule,RegistrarRoutingModule,FormsModule,MatInputModule,ReactiveFormsModule,MatIconModule,MatFormFieldModule,NgxSpinnerModule,AutoSubMenuModule
    ]
})
export class RegistrarModule{}