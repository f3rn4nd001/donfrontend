import { NgModule } from '@angular/core';
import { RegistrarComponent } from "./registrar.component";
import { RegistrarRoutingModule } from "./registrar-routing.module";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input'
import { NgxSpinnerModule } from "ngx-spinner";
import {MatTabsModule} from '@angular/material/tabs';
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SelectEstatusModule } from "../../../Plantillas/Select/select-estatus/select-estatus.module";
import { AutoMenuModule } from "../../../Plantillas/Autocomplete/auto-menu/auto-menu.module";
@NgModule({
    declarations:[
        RegistrarComponent,
    ],
    imports:[
        CommonModule,
        RegistrarRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        NgxSpinnerModule,
        MatTabsModule,
        MatTooltipModule,
        SelectEstatusModule,
        AutoMenuModule
    ]
})
export class RegistrarModule{}