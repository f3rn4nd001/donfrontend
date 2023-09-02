import { ModuleWithProviders } from "@angular/core";
import { Routes,RouterModule  } from "@angular/router";

const ControladoresRouting:ModuleWithProviders<any>=RouterModule.forRoot([
    {path:'catalogo/controllers', loadChildren:()=>import('../consulta/consulta.module').then(m=>m.ConsultaModule)},
]);

export var objRutasControladores=[
    ControladoresRouting
]