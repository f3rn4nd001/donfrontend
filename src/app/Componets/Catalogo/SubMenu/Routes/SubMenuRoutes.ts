import { ModuleWithProviders } from "@angular/core";
import { Routes,RouterModule  } from "@angular/router";

const SubMenuRouting:ModuleWithProviders<any>=RouterModule.forRoot([
    {path:'catalogo/submenu', loadChildren:()=>import('../consulta/consulta.module').then(m=>m.ConsultaModule)},
    {path:'catalogo/submenu/registrar', loadChildren:()=>import('../registrar/registrar.module').then(m=>m.RegistrarModule)},

]);

export var objRutasSubMenu=[
    SubMenuRouting
]