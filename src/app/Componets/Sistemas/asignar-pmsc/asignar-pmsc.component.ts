import { Component,OnInit } from '@angular/core';
@Component({
  selector: 'app-asignar-pmsc',
  templateUrl: './asignar-pmsc.component.html',
  styleUrls: ['./asignar-pmsc.component.css']
})
export class AsignarPMSCComponent  implements OnInit{
  public ecodUsuarios : any = '';

  constructor(
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
  
  }
}
