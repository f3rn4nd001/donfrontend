import { Component,OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { AlertServerService } from 'src/app/Services/Alert/alert-server.service';
import { UsuarioService } from 'src/app/Services/Catalogo/Usuarios/usuario.service';
import {  DetallesComponent} from "../detalles/detalles.component";
import {SpinerService} from '../../../../Services/loadin/spiner.service';
import { LoginService } from "../../../../Services/Login/login.service";
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

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
  public validadContras = 0;
  public contenedor: any = {};
  public data:any={};
  public reqdata: any={}
  public log : any={} 
  public Estatus:any=[];
  public tipoUsuario:any=[];

  constructor(
    private _serviceAlert: AlertServerService,
    private _UsuarioService: UsuarioService,
    private _SpinerService : SpinerService,
    private _LoginService : LoginService,
    private dialog: MatDialog,
    public router: Router,

  ){}
  
  ngOnInit():void{
    this.ecodUsuarios = localStorage.getItem('ecod');  
    if (this.ecodUsuarios) {
      this.getEditarRegistro();
      this.getComplenetos();
    }
    this.ContraformGroup = new FormGroup({'Contrasena': new FormControl('', Validators.required)});
    this.NuevaUsuarioFormGroup = new FormGroup({
      'tNombre':new FormControl('', Validators.required),
      'tApellido':new FormControl('',Validators.required), 
      'tRFC':new FormControl(''), 
      'tCURP':new FormControl(''), 
      'ecodTipoUsuario':new FormControl(''),
      'EcodEstatus':new FormControl('') ,
      'motivoEliminacion':new FormControl('') 

     });
     this.Generar = new FormGroup({'formArray': new FormArray([])});
     this.annadirinputConcepto();

  }
  getComplenetos(){
    this._UsuarioService.getComprementos().then((response:any)=>{
      this.Estatus= response.sqlcatEstatus;
      this.tipoUsuario = response.sqlTipoUsuarios;      
    })
  }

  validadContrasena(params:any){
    this.log.contrasena = params
    this.log.ecodCorreo= localStorage.getItem('ecodCorreo'); 
    this._LoginService.postValidadContrasena(this.log).then((response:any)=>{
      this.validadContras = response.valContra.dl;
    })   
  }

  getEditarRegistro(){
    this._UsuarioService.getDetalle(this.ecodUsuarios).then((response:any)=>{      
      this.datosUsuario = (response.sqlusuario);   
      this.datos.tNombre = this.datosUsuario.tNombre;
      this.datos.tApellido = this.datosUsuario.tApellido;
      this.datos.tRFC = this.datosUsuario.trfc;
      this.datos.tCURP = this.datosUsuario.tCRUP;
      this.datos.ecodUsuario = this.datosUsuario.ecodUsuario;
      this.datos.EcodEstatus = this.datosUsuario.EcodEstatus;
      this.datos.ecodTipoUsuario = this.datosUsuario.ecodTipoUsuario;
      this.datos.mail= response.sqlgmail;
      this.datos.mail.forEach((icarcore:any) => {        
        if(icarcore.tCorreo != null){
          (this.Generar.controls['formArray'] as FormArray).push(new FormGroup({
            'ecodCorreo':new FormControl(icarcore.ecodCorreo),
            'Correo': new FormControl(icarcore.tCorreo),
          }))
        }
      }); 
    })
    localStorage.removeItem('ecod');    
  }

  annadirinputConcepto(){
    (this.Generar.controls['formArray']).push(new FormGroup({
      'ecodCorreo': new FormControl(''),
      'Correo': new FormControl('',Validators.email ),
      'Contrasena': new FormControl(''),
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
    if (this.validadContras != 0) {
      let arrCorreo:any = [];
      this.Generar.value.formArray.forEach((element:any) => {
        if (element.Correo != '' || element.ecodCorreo != '' ) {
          arrCorreo.push({
            correo : element.Correo,
            contraseña:element.Contrasena,
            ecodCorreo:element.ecodCorreo
          });
        }
      });    
      this._serviceAlert.Guardar().then((response:any)=>{
        if (response == 1) {
          this.data.arrCorreo = arrCorreo;
          this.data.usuario = this.NuevaUsuarioFormGroup.value;  
          this.data.usuario.ecodUsuario = this.datos.ecodUsuario;
          this.data.datosUsuario= this.datosUsuario;        
          this._UsuarioService.postRegistrar(this.data).then((response:any)=>{ 
            this._UsuarioService.getDetalle(response[0].Codigo).then((response:any)=>{
              let dialogRef = this.dialog.open(DetallesComponent, {
                data: { titulo: "Detalle de usuario",usuario:response.sqlusuario, gmail:response.sqlgmail}
              });  
              dialogRef.afterClosed().subscribe(result => { 
                this.router.navigate(['catalogo/usuario']);      
              });
            })
          }).catch((error)=>{});
        }
      })
    }
    else{
      this._serviceAlert.ErrorGuardar("Valide su contraseña");
    }
  }
  reConsulta(){
    this.router.navigate(['catalogo/usuario']);
  }
}
