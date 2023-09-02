import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoMenuComponent } from "./auto-menu.component";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';


@NgModule({
    declarations:[
        AutoMenuComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatFormFieldModule,
        MatAutocompleteModule,
        MatFormFieldModule,
       ],
    exports: [
        AutoMenuComponent
    ]
})
export class AutoMenuModule{}