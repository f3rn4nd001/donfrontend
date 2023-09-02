import { Component,OnInit } from '@angular/core';
import { UsuarioService } from "../../../Services/Catalogo/Usuarios/usuario.service";
import { MenuService } from "../../../Services/Catalogo/Menu/menu.service";
@Component({
  selector: 'app-asignar-pmsc',
  templateUrl: './asignar-pmsc.component.html',
  styleUrls: ['./asignar-pmsc.component.css']
})
export class AsignarPMSCComponent  implements OnInit{
  public ecodUsuarios : any = '';

  constructor(
    private _UsuarioService:UsuarioService,
    private _MenuService:MenuService
  ){}
  
  ngOnInit(): void {
    this.ecodUsuarios = localStorage.getItem('ecod');  
    if (this.ecodUsuarios) {
      this.getRegistros();
    }
    this.getRegistros();

  }
  getRegistros(){
    localStorage.removeItem('ecod'); 
   /* this._UsuarioService.getDetalle(this.ecodUsuarios).then((response:any)=>{ 
      console.log(response.sqlusuario); 
    });*/
    let data = {};
    this._MenuService.getRegistros(data).then((response:any)=>{ 
    
    }); 
  }
}
