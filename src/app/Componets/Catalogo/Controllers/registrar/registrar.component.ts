import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/Login/login.service';
import { ServicesService } from "../../../Plantillas/services/services.service";
import { AlertServerService } from 'src/app/Services/Alert/alert-server.service';
import { UsuarioService } from 'src/app/Services/Catalogo/Usuarios/usuario.service';
import { ControladoresService } from "../../../../Services/Catalogo/Controladores/controladores.service";

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  hide = true;
  public ecodControllers : any = '';
  public ContraformGroup: any = FormGroup;
  public log : any={} 
  public validadContras = 0;
  public contenedor: any = {};
  public NuevoFormGroup: any = FormGroup;
  public datos: any = {};
  public data:any={};
  public Estatus:any=[];

  constructor(
    public router: Router,
    private _LoginService : LoginService,
    private _ServicesService:ServicesService,
    private _serviceAlert: AlertServerService,
    private _UsuarioService:UsuarioService,  
    private _ControladoresService:ControladoresService
  ){}

  ngOnInit(): void {
    this.ecodControllers = localStorage.getItem('ecod');  
      if (this.ecodControllers) {
        this.getEditarRegistro();
        this.getComplenetos();
      }
    this.ContraformGroup = new FormGroup({'Contrasena': new FormControl('', Validators.required)});
    this.NuevoFormGroup = new FormGroup({
      'tNombre':new FormControl('', Validators.required),
      'tUrl':new FormControl('',Validators.required),
      'EcodEstatus':new FormControl('')
    });
    this._ServicesService.diaparadorAutocomprit.subscribe(res=>{  
      if (res.ecodSubmenu ) {this.datos.ecodSubmenu=res.ecodSubmenu.ecodSubmenu;}     
      });  
  }
  getEditarRegistro(){
    this._ControladoresService.getRegistros(this.ecodControllers).then((response:any)=>{  
      this.datos.tNombre = response.sqlsubMenu.tNombre;        
      this.datos.tUrl = response.sqlsubMenu.tUrl;
      this.datos.ecodRelMenuSubMenuController=response.sqlrelsubmenucontroller.ecodRelMenuSubMenuController;        
      this._ServicesService.diaparadorAutocomprit.emit({
        ecodMenu:response.sqlrelsubmenucontroller,
        EcodEstatus:response.sqlsubMenu.ecodEstatus,
        Menu:response.sqlrelsubmenucontroller.Menu,
      }); 
      });    
      localStorage.removeItem('ecod');
  }
  getComplenetos(){
    this._UsuarioService.getComprementos().then((response:any)=>{
      this.Estatus= response.sqlcatEstatus;
    })
  }
  reConsulta(){
    this.router.navigate(['catalogo/controllers']);
  }

  validadContrasena(params:any){
    this.log.contrasena = params
    this.log.ecodCorreo= localStorage.getItem('ecodCorreo'); 
    this._LoginService.postValidadContrasena(this.log).then((response:any)=>{
      this.validadContras = response.valContra.dl;
    })   
  }
  Guardar(){
    if (this.validadContras != 0) {
      let errorsMensaje=[];
      let bandera=0;
      if ((this.datos.ecodSubmenu == null) || (this.datos.ecodSubmenu == '')){errorsMensaje.push("Seleccione un sub menu");}
      if ((this.NuevoFormGroup.value.tNombre == null) || (this.NuevoFormGroup.value.tNombre == '')){errorsMensaje.push("<br/>El campo nombre no puede estar bacio");}
      if ((this.NuevoFormGroup.value.tUrl == null) || (this.NuevoFormGroup.value.tUrl == '')){errorsMensaje.push("<br/>El campo url no puede estar bacio");}
      if(errorsMensaje.length>0){
        this._serviceAlert.ErrorGuardar(errorsMensaje);
        bandera = 1;
      }
      if (bandera == 0) {
        this._serviceAlert.Guardar().then((response:any)=>{
          if (response == 1) {
            this.data.controladores = this.NuevoFormGroup.value;
            this.data.ecodSubmenu=this.datos.ecodSubmenu;
            this.data.controladores.ecodControllers = this.ecodControllers
            this._ControladoresService.postRegistrar(this.data).then((response:any)=>{   
            console.log(response);
            
            })          }
        }) 
      }
    }    
    else{
      this._serviceAlert.ErrorGuardar("Valide su contraseña");
      
    } 
  }
  
}
