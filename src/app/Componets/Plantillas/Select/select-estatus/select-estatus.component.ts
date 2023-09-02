import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/Services/Catalogo/Usuarios/usuario.service';
import { ServicesService } from "../../services/services.service";
@Component({
  selector: 'app-select-estatus',
  templateUrl: './select-estatus.component.html',
  styleUrls: ['./select-estatus.component.css']
})
export class SelectEstatusComponent implements OnInit{
  public NuevoMenuFormGroup: any = FormGroup;
  public datos: any = {};
  public Estatus:any=[];

constructor(
  private _UsuarioService:UsuarioService,  
  private _ServicesService:ServicesService
){}

ngOnInit(): void {
  this._ServicesService.diaparadorAutocomprit.subscribe(res=>{
    if (res.EcodEstatus) {this.datos.EcodEstatus=res.EcodEstatus} 
  });
  this._UsuarioService.getComprementos().then((response:any)=>{
    this.Estatus= response.sqlcatEstatus;
  });
  this.NuevoMenuFormGroup = new FormGroup({'EcodEstatus':new FormControl('')});
}
selectsa(){  
  this._ServicesService.diaparadorAutocomprit.emit({EcodEstatus:this.datos.EcodEstatus})
}
}
