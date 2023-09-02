import { Component ,OnInit,ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort,Sort} from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';
import { SubmenuService } from "../../../../Services/Catalogo/SubMenu/submenu.service";
import { DetallesComponent } from '../detalles/detalles.component';

@Component({
  selector: 'app-consulta',
  templateUrl: '../../../Plantillas/Consultas/consulta.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit{
  tituloConsulta="";
  dataSource: any = [];
  public datos: any = [];

  public getdatos: any = {};
  public mostrar = true;
  public filtroForm: any = FormGroup;
  public contenedor: any = {};
  public metodos: any = { eNumeroRegistros: 100, tMetodoOrdenamiento: 'ecodSubmenu', orden: 'DESC' };

  controller:any[] = [];;
  botones=[
    {nombre:'Registrar',relURL:'/catalogo/submenu/registrar'},
  ];
  
  MenuDesplegable=[
    {nombre:'Ver detalles', relURL:'catalogo/submenu'},{nombre:'N/A', relURL:'/catalogo/submenu/registrar'},
 ];

  columns = [
    { columnDef: 'E',       header: 'E',         cell: (element= this.dataSource.ecodSubmenu) => `${element.ecodSubmenu}`},
    { columnDef: 'ecodSubmenu',   header: 'Folio',    cell: (element= this.dataSource.ecodSubmenu) => `${element.ecodSubmenu}`},
    { columnDef: 'tNombre',  header: 'Nombre',    cell: (element= this.dataSource.tNombre) => `${element.tNombre}`},
    { columnDef: 'tUrl',  header: 'tUrl',    cell: (element= this.dataSource.tUrl) => `${element.tUrl}`},
  ]

  filtrodatas = [
    {Nombre : 'ID',         filtroREl:'filtroForm.value.ecodSubmenu',   formControlName:'ecodSubmenu',  tipos:'text'},  
    {Nombre : 'Nombre',         filtroREl:'filtroForm.value.tNombre',   formControlName:'tNombre',  tipos:'text'},    
    {Nombre : 'Url',         filtroREl:'filtroForm.value.tUrl',   formControlName:'tUrl',  tipos:'text'},    

  ]

  displayedColumns = this.columns.map(c => c.columnDef);

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('paginator') paginator!: MatPaginator;

  constructor(
    private _SubmenuService:SubmenuService,
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
      'ecodSubmenu': new FormControl('', []),
      'tNombre': new FormControl('', []),
      'tUrl':new FormControl('',[])
    });
    this.getRegistros();
  }

  getRegistros(){
    let data:any={};
    data.metodos=this.metodos;
    this._SubmenuService.getRegistros(data).then((response:any)=>{
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
    this._SubmenuService.getDetalle(data).then((response:any)=>{      
      let dialogRef = this.dialog.open(DetallesComponent, {
        data: {  titulo: "Detalle de Sub menu",sqlsubMen:response.sqlsubMenu,sqlrelsubmenucontroller:response.sqlrelsubmenucontroller}
      });  
    })
  }
  filtro(){
    let data:any={};
    data.metodos=this.metodos;
    data.filtros=this.filtroForm.value
    this._SubmenuService.getRegistros(data).then((response:any)=>{
      this.dataSource=response
   }).catch((error)=>{});
  
     }
  mostrarfiltro(){
    this.mostrar = !this.mostrar; 
  }
}
