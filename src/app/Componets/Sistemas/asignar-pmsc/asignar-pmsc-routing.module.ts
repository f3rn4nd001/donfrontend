import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AsignarPMSCComponent } from "./asignar-pmsc.component";
import { canActivateGuard } from 'src/app/Services/activate/can-activate.guard';

const routes:Routes=[
    {path:'',component:AsignarPMSCComponent, canActivate: [canActivateGuard]}
];
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class AsignarPMSCRoutingModule{}