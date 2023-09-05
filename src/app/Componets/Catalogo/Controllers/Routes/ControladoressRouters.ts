import { ModuleWithProviders } from "@angular/core";
import { Routes,RouterModule  } from "@angular/router";

const ControladoresRouting:ModuleWithProviders<any>=RouterModule.forRoot([
    {path:'catalogo/controllers', loadChildren:()=>import('../consulta/consulta.module').then(m=>m.ConsultaModule)},
    {path:'catalogo/controllers/registrar', loadChildren:()=>import('../registrar/registrar.module').then(m=>m.RegistrarModule)},
]);

export var objRutasControladores=[
    ControladoresRouting
]