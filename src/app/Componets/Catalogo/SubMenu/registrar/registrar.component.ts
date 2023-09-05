import { Component,OnInit } from '@angular/core';
import { FormGroup,FormControl ,Validators} from '@angular/forms';
import { LoginService  } from "../../../../Services/Login/login.service";
import { Router } from '@angular/router';
import { AlertServerService } from 'src/app/Services/Alert/alert-server.service';
import { ServicesService } from "../../../Plantillas/services/services.service";
import { UsuarioService } from 'src/app/Services/Catalogo/Usuarios/usuario.service';
import { SubmenuService } from "../../../../Services/Catalogo/SubMenu/submenu.service";
@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  public ecodSubmenu : any = '';
  hide = true;
  public ContraformGroup: any = FormGroup;
  public log : any={} 
  public validadContras = 0;
  public contenedor: any = {};
  public NuevoSubMenuFormGroup: any = FormGroup;
  public datos: any = {};
  public Estatus:any=[];
  public data:any={};

  constructor(
    private _LoginService : LoginService,
    public router: Router,
    private _serviceAlert: AlertServerService,
    private _ServicesService:ServicesService,
    private _UsuarioService:UsuarioService,  
    private _SubmenuService:SubmenuService
  ){}

  ngOnInit(): void {
    this.ecodSubmenu = localStorage.getItem('ecod');  
    if (this.ecodSubmenu) {
      this.getEditarRegistro();
      this.getComplenetos();
    }
    this.ContraformGroup = new FormGroup({'Contrasena': new FormControl('', Validators.required)});
    this.NuevoSubMenuFormGroup = new FormGroup({
      'tUrl':new FormControl('',Validators.required),
      'tNombre':new FormControl('',Validators.required),
      'EcodEstatus':new FormControl('')
    });
    this._ServicesService.diaparadorAutocomprit.subscribe(res=>{  
     if (res.ecodMenu ) {this.datos.ecodMenu=res.ecodMenu.ecodMenu;}     
     });         
     
  }
  getEditarRegistro(){
    this._SubmenuService.getDetalle(this.ecodSubmenu).then((response:any)=>{  
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
  validadContrasena(params:any){    
    this.log.contrasena = params
    this.log.ecodCorreo= localStorage.getItem('ecodCorreo'); 
    this._LoginService.postValidadContrasena(this.log).then((response:any)=>{
      this.validadContras = response.valContra.dl;
    })   
  }
  reConsulta(){
    window.location.href = "catalogo/submenu";
  }

  Guardar(){      
    if (this.validadContras != 0) {
      let errorsMensaje=[];
      let bandera=0;
      if ((this.datos.ecodMenu == null) || (this.datos.ecodMenu == '')){errorsMensaje.push("Seleccione un menu");}
      if ((this.NuevoSubMenuFormGroup.value.tNombre == null) || (this.NuevoSubMenuFormGroup.value.tNombre == '')){errorsMensaje.push("<br/>El campo nombre no puede estar bacio");}
      if ((this.NuevoSubMenuFormGroup.value.tUrl == null) || (this.NuevoSubMenuFormGroup.value.tUrl == '')){errorsMensaje.push("<br/>El campo url no puede estar bacio");}
      if(errorsMensaje.length>0){
        this._serviceAlert.ErrorGuardar(errorsMensaje);
        bandera = 1;
      }
      if (bandera == 0) {
        this._serviceAlert.Guardar().then((response:any)=>{
          if (response == 1) {
            this.data.SubMenu = this.NuevoSubMenuFormGroup.value;
            this.data.SubMenu.ecodSubmenu = this.ecodSubmenu
            this.data.ecodMenu=this.datos.ecodMenu;
            this._SubmenuService.postRegistrar(this.data).then((response:any)=>{   
              this._SubmenuService.getDetalle(response.responseSubMenu.Codigo).then((response:any)=>{
              })              
            })
          }
        })
      }
    }
    else{
      this._serviceAlert.ErrorGuardar("Valide su contraseña");
      
    }    
  }
}
