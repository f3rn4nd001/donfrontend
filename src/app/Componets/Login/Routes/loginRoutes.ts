import { ModuleWithProviders } from "@angular/core";
import { Routes,RouterModule  } from "@angular/router";

const loginRouting:ModuleWithProviders<any>=RouterModule.forRoot([
    {path:'login',loadChildren:()=>import('../login/login.module').then(m=>m.LoginModule)},

]);

export var objRutasLogin=[
    loginRouting
]