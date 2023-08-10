import { Component,OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertServerService } from 'src/app/Services/Alert/alert-server.service';
import { UsuarioService } from 'src/app/Services/Usuarios/usuario.service';
import {  DetallesComponent} from "../detalles/detalles.component";
import {SpinerService} from '../../../../Services/loadin/spiner.service'
@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit{
  hide = true;
  
  public ecodUsuarios : any = '';
  public datosUsuario : any = '';
  public datos: any = {};


  public NuevaUsuarioFormGroup: any = FormGroup;
  public ContraformGroup: any = FormGroup;
  public Generar: any = FormGroup;
  
  public validadContras = 1;
  public contenedor: any = {};
  public data:any={};
  public reqdata: any={}
  
  constructor(
    private _serviceAlert: AlertServerService,
    private _UsuarioService: UsuarioService,
    private _SpinerService : SpinerService
  ){}
  
  ngOnInit():void{
    this.ecodUsuarios = localStorage.getItem('ecod');  
    if (this.ecodUsuarios) {
      this.getEditarRegistro();
    }
    this.ContraformGroup = new FormGroup({'Contrasena': new FormControl('', Validators.required)});
    this.NuevaUsuarioFormGroup = new FormGroup({
      'tNombre':new FormControl('', Validators.required),
      'tApellido':new FormControl('',Validators.required), 
      'tRFC':new FormControl(''), 
      'tCURP':new FormControl('') 
     });
     this.Generar = new FormGroup({'formArray': new FormArray([])});
     this.annadirinputConcepto();

  }
  getEditarRegistro(){
    this._UsuarioService.getDetalle(this.ecodUsuarios).then((response:any)=>{
      this.datosUsuario = (response.sqlusuario);   
      console.log(this.datosUsuario);
      
      this.datos.tNombre = this.datosUsuario.tNombre;
      this.datos.tApellido = this.datosUsuario.tApellido;
      this.datos.tRFC = this.datosUsuario.tRFC;
      this.datos.tCURP = this.datosUsuario.tCURP;
      this.datos.correo= response.sqlcorreo;

      this.datos.correo.forEach((icarcore:any) => {
      console.log(icarcore);
      
      });
    })
    localStorage.removeItem('ecod');
    
  }
  validadContrasena(params:any){}
  annadirinputConcepto(){
    (this.Generar.controls['formArray']).push(new FormGroup({
      'Correo': new FormControl('',Validators.email ),
      'Telefono': new FormControl(''),
    }));
  }

  eliminarinputConcepto(index: number) { 
    if (this.Generar.value.formArray.length == 1) {  
      this._serviceAlert.ErrorGuardar('Debe haber 1 concepto al menos');
    }
    else{
      (this.Generar.controls['formArray']).removeAt(index);
    }
  }
  Guardar(){
    let arrTelefono:any = [];
    let arrCorreo:any = [];

    this.Generar.value.formArray.forEach((element:any) => {
      if (element.Telefono != '') {
        arrTelefono.push(element.Telefono);
      }
      if (element.Correo != '') {
        arrCorreo.push(element.Correo);
      }
    });

    this._serviceAlert.Guardar().then((response:any)=>{
      if (response == 1) {
        this.data.arrTelefono = arrTelefono
        this.data.arrCorreo = arrCorreo
        this.data.usuario = this.NuevaUsuarioFormGroup.value
        this._UsuarioService.postRegistrar(this.data).then((response:any)=>{ 
     }).catch((error)=>{});
    }
  })
  }
}
