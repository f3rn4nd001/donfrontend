import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ConsultaComponent } from "./consulta.component";
import { canActivateGuard } from 'src/app/Services/activate/can-activate.guard';
const routes:Routes=[
    {
        path:'',component:ConsultaComponent, canActivate: [canActivateGuard]
    }
];
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class ConsultaRoutingModule{}