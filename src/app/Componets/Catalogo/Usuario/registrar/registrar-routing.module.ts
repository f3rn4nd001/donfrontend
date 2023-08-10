import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RegistrarComponent } from "./registrar.component";
const routes:Routes=[
    {
        path:'',component:RegistrarComponent
    }
];
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class RegistrarRoutingModule{}