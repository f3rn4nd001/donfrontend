import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoSubMenuComponent } from "./auto-sub-menu.component";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';


@NgModule({
    declarations:[
        AutoSubMenuComponent
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
        AutoSubMenuComponent
    ]
})
export class AutoSubMenuModule{}