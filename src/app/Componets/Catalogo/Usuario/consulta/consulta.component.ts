import { Component,OnInit,ViewChild } from '@angular/core';
import { UsuarioService } from "../../../../Services/Catalogo/Usuarios/usuario.service";
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort,Sort} from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { DetallesComponent } from '../detalles/detalles.component';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-consulta',
  templateUrl: '../../../Plantillas/Consultas/consulta.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit  {
  tituloConsulta="dadawdwa";
  dataSource: any = [];
  public datos: any = [];

  public getdatos: any = {};
  public mostrar = true;
  public filtroForm: any = FormGroup;
  public contenedor: any = {};
  public metodos: any = { eNumeroRegistros: 100, tMetodoOrdenamiento: 'ecodUsuario', orden: 'DESC' };

  opCliente:any[] = [];
   controller:any[] = [];;
  botones=[
    {nombre:'Registrar',relURL:'/catalogo/usuario/registrar'},
  ];
  
  MenuDesplegable=[
   {nombre:'Ver detalles', relURL:'catalogo/usuario'},
   {nombre:'NA',       relURL:'/catalogo/usuario/registrar'},
   {nombre:'NA',       relURL:'/sistemas/asignasionPermisos'},
 ];

  columns = [
    { columnDef: 'E',             header: 'E',        cell: (element= this.dataSource.ecodUsuario) => `${element.ecodUsuario}`},
    { columnDef: 'ecodUsuario',         header: 'Folio',    cell: (element= this.dataSource.ecodUsuario) => `${element.ecodUsuario}`},
    { columnDef: 'Estatus',       header: 'Estatus',    cell: (element= this.dataSource.Estatus) => `${element.Estatus}`},
    { columnDef: 'nombres',       header: 'Nombres',    cell: (element= this.dataSource.nombres) => `${element.nombres}`},
    { columnDef: 'tCRUP',          header: 'CURP',    cell: (element= this.dataSource.tCRUP) => `${element.tCRUP}`},
    { columnDef: 'tRFC',           header: 'RFC',    cell: (element= this.dataSource.tRFC) => `${element.tRFC}`},
    { columnDef: 'fhCreacion',  header: 'Fh. Creacion',    cell: (element= this.dataSource.fhCreacion) => `${element.fhCreacion}`},
  ]

  filtrodatas = [
    {Nombre : 'ID',         filtroREl:'filtroForm.value.ecodUsuario',   formControlName:'ecodUsuario',  tipos:'text'},  
    {Nombre : 'Rfc',         filtroREl:'filtroForm.value.tRFC',   formControlName:'tRFC',  tipos:'text'},
  ]

  displayedColumns = this.columns.map(c => c.columnDef);

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('paginator') paginator!: MatPaginator;

  constructor(
    private _services:UsuarioService,
    public dialog: MatDialog,

  ){}

  ngOnInit(): void {
    this.datos = localStorage.getItem('Menu');
    JSON.parse(this.datos).forEach((element:any) => {
      if(window.location.pathname ==  element.urlSubMenu){ 
        this.tituloConsulta = element.submenu;
        this.controller.push({
          urlController:element.urlController,
          Nombres:element.Controller
        })
      }
    });

    this.filtroForm = new FormGroup({
      'ecodUsuario': new FormControl('', []),
      'tRFC': new FormControl('', []),
    });
    this.getRegistros();
  }

  getRegistros(){
    let data:any={};
    data.metodos=this.metodos;
    this._services.getRegistros(data).then((response:any)=>{
      this.getdatos = (response);    
      this.dataSource= new MatTableDataSource(this.getdatos);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }).catch((error)=>{});
  }
  relparams(data:any){
    localStorage.setItem('ecod', data);
  }

  getDetalles(data:any){
    this._services.getDetalle(data).then((response:any)=>{      
      let dialogRef = this.dialog.open(DetallesComponent, {
        data: { titulo: "Detalle de usuario",usuario:response.sqlusuario, gmail:response.sqlgmail}
      });  
    })
  
  }
  filtro(){
    let data:any={};
    data.metodos=this.metodos;
    data.filtros=this.filtroForm.value
    this._services.getRegistros(data).then((response:any)=>{
      console.log(response);
      this.dataSource=response
   }).catch((error)=>{});
  }
  
  mostrarfiltro(){
    this.mostrar = !this.mostrar; 
  }
}
