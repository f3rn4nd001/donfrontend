import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ConsultaComponent } from "./consulta.component";
const routes:Routes=[
    {
        path:'',component:ConsultaComponent
    }
];
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class ConsultaRoutingModule{}