import { ModuleWithProviders } from "@angular/core";
import { Routes,RouterModule  } from "@angular/router";

import { objRutasLogin } from "./Componets/Login/Routes/loginRoutes";
import { objRutasUsuario } from "./Componets/Catalogo/Usuario/Routes/usuarioRoutes";
import {objRutasHome} from "./Componets/dasboard/Routes/homeRoutes"
import { objRutasMenu } from "./Componets/Catalogo/Menu/Routes/MenuRoutes";
import { objRutasAsignarPMSC } from "./Componets/Sistemas/Routes/PMSCRoters";
import { objRutasSubMenu } from "./Componets/Catalogo/SubMenu/Routes/SubMenuRoutes";
import { objRutasControladores } from "./Componets/Catalogo/Controllers/Routes/ControladoressRouters";
export var objRutas=[objRutasLogin,objRutasUsuario,objRutasHome,objRutasMenu,objRutasAsignarPMSC,objRutasSubMenu,objRutasControladores];