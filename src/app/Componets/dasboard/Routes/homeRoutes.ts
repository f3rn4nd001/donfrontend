import { ModuleWithProviders } from "@angular/core";
import { Routes,RouterModule  } from "@angular/router";

const hopmeRouting:ModuleWithProviders<any>=RouterModule.forRoot([
    {path:'home',loadChildren:()=>import('../home/home.module').then(m=>m.HomeModule)},
]);

export var objRutasHome=[
    hopmeRouting
]