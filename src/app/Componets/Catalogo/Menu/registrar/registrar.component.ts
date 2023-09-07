import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService  } from "../../../../Services/Login/login.service";
import { Router } from '@angular/router';
import { AlertServerService } from 'src/app/Services/Alert/alert-server.service';
import { MatDialog } from '@angular/material/dialog';
import {  DetallesComponent} from "../detalles/detalles.component";
import { ServicesService } from "../../../Plantillas/services/services.service";
import {GenerarService} from "../../../../Services/Catalogo/Generar/generar.service";
@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})

export class RegistrarComponent implements OnInit{
  hide = true;
  public ecodMenu : any = '';
  public ContraformGroup: any = FormGroup;
  public log : any={} 
  public validadContras = 0;
  public contenedor: any = {};
  public NuevoMenuFormGroup: any = FormGroup;
  public datos: any = {};
  public data:any={};
  public datosMenu : any = '';
  public envio: any = {};

  constructor(
    private _LoginService : LoginService,
    public router: Router,
    private _serviceAlert: AlertServerService,
    private dialog: MatDialog,
    private _ServicesService:ServicesService,
    private _GenerarService:GenerarService
  ){}
  
  ngOnInit(): void {
    this.ecodMenu = localStorage.getItem('ecod');  
      if (this.ecodMenu) {
        this.getEditarRegistro();
      }
    this.ContraformGroup = new FormGroup({'Contrasena': new FormControl('', Validators.required)});
    this.NuevoMenuFormGroup = new FormGroup({
      'tNombre':new FormControl('', Validators.required),
      'Iicons':new FormControl(''),
    });
    this._ServicesService.diaparadorAutocomprit.subscribe(res=>{
      this.datos.EcodEstatus=res.EcodEstatus
    });   
  }

  getEditarRegistro(){
    this.envio.data=this.ecodMenu
    this.envio.urls="Catalogo/menu/detalles";
    this._GenerarService.getDetalle(this.envio).then((response:any)=>{  
      this.datosMenu = (response.sqlMenu);   
      this.datos.tNombre = this.datosMenu.tNombre;        
      this.datos.Iicons = this.datosMenu.Iconos;     
      this.datos.ecodMenu = this.datosMenu.ecodMenu;      
      this._ServicesService.diaparadorAutocomprit.emit({EcodEstatus:this.datosMenu.ecodEstatus}); 
    });
    localStorage.removeItem('ecod');    
  }

  validadContrasena(params:any){
    this.log.contrasena = params
    this.log.ecodCorreo= localStorage.getItem('ecodCorreo'); 
    this._LoginService.postValidadContrasena(this.log).then((response:any)=>{
      this.validadContras = response.valContra.dl;
    })   
  }

  reConsulta(){
    window.location.href ='catalogo/menu';
  }

  Guardar(){
    if (this.validadContras != 0) {
      let errorsMensaje=[];
      let bandera=0;
      if ((this.NuevoMenuFormGroup.value.tNombre == null) || (this.NuevoMenuFormGroup.value.tNombre == '') ) {
        errorsMensaje.push("El campo nombre no puede estar bacio");
      }
      if(errorsMensaje.length>0){
        this._serviceAlert.ErrorGuardar(errorsMensaje);
        bandera = 1;
      }
      if (bandera == 0) {
        this._serviceAlert.Guardar().then((response:any)=>{
          if (response == 1) {
            this.data.Menu = this.NuevoMenuFormGroup.value;
            this.data.Menu.ecodMenu = this.datos.ecodMenu;
            this.data.datosMenu= this.datosMenu;
            this.data.Menu.EcodEstatus=this.datos.EcodEstatus;
            this.data.urls="Catalogo/menu/registrar";
            this._GenerarService.postRegistrar(this.data).then((response:any)=>{ 
              this.envio.data=response[0].Codigo
              this.envio.urls="Catalogo/menu/detalles";
              this._GenerarService.getDetalle(this.envio).then((response:any)=>{
                let dialogRef = this.dialog.open(DetallesComponent, {
                  data: { titulo: "Detalle de Menu",Menu:response.sqlMenu}
                });  
                dialogRef.afterClosed().subscribe(result => { 
                  this.router.navigate(['catalogo/menu']);      
                });
              })            
            });
          }
        })
      }       
    }
    else{
      this._serviceAlert.ErrorGuardar("Valide su contraseña");
    }
  }
}
