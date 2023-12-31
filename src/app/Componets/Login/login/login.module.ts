import { NgModule } from '@angular/core';
import { LoginComponent } from "./login.component";
import { LoginRoutingModule } from "./login-routing.module";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations:[
        LoginComponent,
        
    ],
    imports:[
        CommonModule,
        LoginRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule
    ]
})
export class LoginModule{}