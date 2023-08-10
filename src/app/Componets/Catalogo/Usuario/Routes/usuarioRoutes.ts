import { ModuleWithProviders } from "@angular/core";
import { Routes,RouterModule  } from "@angular/router";

const usuarioRouting:ModuleWithProviders<any>=RouterModule.forRoot([
    {path:'catalogo/usuario/registrar',loadChildren:()=>import('../registrar/registrar.module').then(m=>m.RegistrarModule)},
    {path:'catalogo/usuario/editar',loadChildren:()=>import('../registrar/registrar.module').then(m=>m.RegistrarModule)},
    {path:'catalogo/usuario', loadChildren:()=>import('../consulta/consulta.module').then(m=>m.ConsultaModule)},
]);

export var objRutasUsuario=[
    usuarioRouting
]