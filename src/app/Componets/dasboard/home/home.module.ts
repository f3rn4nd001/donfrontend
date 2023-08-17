import { NgModule } from '@angular/core';
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home-routing.module";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations:[
        HomeComponent,
    ],
    imports:[
        CommonModule,
        HomeRoutingModule,
       ]
})
export class HomeModule{}