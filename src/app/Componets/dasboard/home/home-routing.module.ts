import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home.component";
import {canActivateGuard} from '../../../Services/activate/can-activate.guard';
const routes:Routes=[
    {
        path:'',component:HomeComponent, canActivate: [canActivateGuard],
        
    }
];
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class HomeRoutingModule{}