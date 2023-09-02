import { ModuleWithProviders } from "@angular/core";
import { Routes,RouterModule  } from "@angular/router";

const MenuRouting:ModuleWithProviders<any>=RouterModule.forRoot([
    {path:'catalogo/menu', loadChildren:()=>import('../consulta/consulta.module').then(m=>m.ConsultaModule)},
    {path:'catalogo/menu/registrar', loadChildren:()=>import('../registrar/registrar.module').then(m=>m.RegistrarModule)}
]);

export var objRutasMenu=[
    MenuRouting
]