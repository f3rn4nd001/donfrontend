import { ModuleWithProviders } from "@angular/core";
import { Routes,RouterModule  } from "@angular/router";

import { objRutasLogin } from "./Componets/Login/Routes/loginRoutes";
import { objRutasUsuario } from "./Componets/Catalogo/Usuario/Routes/usuarioRoutes";

export var objRutas=[objRutasLogin,objRutasUsuario];