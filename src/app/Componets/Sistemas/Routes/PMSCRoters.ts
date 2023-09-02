import { ModuleWithProviders } from "@angular/core";
import { Routes,RouterModule  } from "@angular/router";

const asignarPMSCRouting:ModuleWithProviders<any>=RouterModule.forRoot([
    {path:'sistemas/asignasionPermisos',loadChildren:()=>import('../asignar-pmsc/asignar-pmsc.module').then(m=>m.asignarMPSCModule)},
]);

export var objRutasAsignarPMSC=[
    asignarPMSCRouting
]