import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsignarPMSCComponent } from "./asignar-pmsc.component";
import { AsignarPMSCRoutingModule } from "./asignar-pmsc-routing.module";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocomplete, MatAutocompleteModule } from '@angular/material/autocomplete';
import { AautoUsuariosComponent } from "../../Plantillas/Autocomplete/aauto-usuarios/aauto-usuarios.component";
@NgModule({
    declarations:[
        AsignarPMSCComponent,
        AautoUsuariosComponent
    ],
    imports:[
        CommonModule,
        AsignarPMSCRoutingModule,
        MatFormFieldModule,MatAutocompleteModule
    ]
})
export class asignarMPSCModule{}