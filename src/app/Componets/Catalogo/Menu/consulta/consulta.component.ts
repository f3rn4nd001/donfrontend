import { Component ,OnInit,ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort,Sort} from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';
import { DetallesComponent } from '../detalles/detalles.component';
import { LoginService } from "../../../../Services/Login/login.service";
import { GenerarService } from "../../../../Services/Catalogo/Generar/generar.service";
@Component({
  selector: 'app-consulta',
  templateUrl: '../../../Plantillas/Consultas/consulta.html',
  styleUrls: ['./consulta.component.css']
})

export class ConsultaComponent implements OnInit{
  tituloConsulta="";
  dataSource: any = [];
  controller:any[] = [];
  public datos: any = [];
  public tokenUrl: any = [];
  public getdatos: any = {};
  public mostrar = true;
  public filtroForm: any = FormGroup;
  public contenedor: any = {};
  public metodos: any = {eNumeroRegistros:100, tMetodoOrdenamiento:'ecodMenu', orden:'DESC' };
  public envio: any = {};

  botones=[{nombre:'Registrar',relURL:'/catalogo/menu/registrar'}];

  MenuDesplegable=[{nombre:'Ver detalles', relURL:'catalogo/menu'},{nombre:'N/A', relURL:'/catalogo/menu/registrar'}];

  columns = [
    { columnDef: 'E',         header: 'E',         cell: (element= this.dataSource.ecodMenu) => `${element.ecodMenu}`},
    { columnDef: 'ecodMenu',  header: 'Folio',     cell: (element= this.dataSource.ecodMenu) => `${element.ecodMenu}`},
    { columnDef: 'tNombre',   header: 'Nombre',    cell: (element= this.dataSource.tNombre) => `${element.tNombre}`},
    { columnDef: 'Iconos',    header: 'Iconos',    cell: (element= this.dataSource.Iconos) => `${element.Iconos}`},
  ]

  filtrodatas = [
    {Nombre : 'ID',       filtroREl:'filtroForm.value.ecodMenu',  formControlName:'ecodMenu', tipos:'text'},  
    {Nombre : 'Nombre',   filtroREl:'filtroForm.value.tNombre',   formControlName:'tNombre',  tipos:'text'},  
  ]

  displayedColumns = this.columns.map(c => c.columnDef);

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('paginator') paginator!: MatPaginator;

  constructor(public dialog: MatDialog, private _GenerarService:GenerarService){}

  ngOnInit(): void {
    this.datos = localStorage.getItem('Menu');
    JSON.parse(this.datos).forEach((element:any) => {
      if(window.location.pathname == element.urlSubMenu){ 
        this.tituloConsulta = element.submenu;        
        this.controller.push({
          urlController:element.urlController,
          Nombres:element.Controller
        })
      }
    });

    this.filtroForm = new FormGroup({
      'ecodMenu': new FormControl('', []),
      'tNombre': new FormControl('', []),
    });
    this.getRegistros();
  }

  getRegistros(){
    this.envio.metodos=this.metodos;
    this.envio.urls="Catalogo/menu/consulta";
    this._GenerarService.getRegistros(this.envio).then((response:any)=>{
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
    this.envio.data=data
    this.envio.urls="Catalogo/menu/detalles";
    this._GenerarService.getDetalle(this.envio).then((response:any)=>{      
      let dialogRef = this.dialog.open(DetallesComponent, {
        data: {  titulo: "Detalle de Menu",Menu:response.sqlMenu}
      });  
    })
  }
  
  filtro(){
    this.envio.metodos=this.metodos;
    this.envio.urls="Catalogo/menu/consulta";
    this.envio.filtros=this.filtroForm.value
    this._GenerarService.getRegistros(this.envio).then((response:any)=>{
      this.dataSource=response
    }).catch((error)=>{});
  }
  
  mostrarfiltro(){this.mostrar = !this.mostrar;}
}