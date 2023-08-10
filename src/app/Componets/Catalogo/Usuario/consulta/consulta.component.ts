import { Component,OnInit,ViewChild } from '@angular/core';
import { UsuarioService } from "../../../../Services/Usuarios/usuario.service";
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
  public getdatos: any = {};
  public mostrar = true;
  public filtroForm: any = FormGroup;
  public contenedor: any = {};
  opCliente:any[] = [];
  botones=[
    {nombre:'Registrar',relURL:'catalogo/usuario/registrar'},
    {nombre:'Registrar',relURL:'catalogo/usuario/registrar'},

  ];
  
  MenuDesplegable=[
    {nombre:'Registrar',    relURL:'catalogo/usuario/registrar'},
    {nombre:'Editar',       relURL:'catalogo/usuario/registrar'},
    {nombre:'Ver detalles', relURL:'catalogo/usuario'},
  ];

  columns = [
    { columnDef: 'E',             header: 'E',        cell: (element= this.dataSource.ecodUsuario) => `${element.ecodUsuario}`},
    { columnDef: 'folio',         header: 'Folio',    cell: (element= this.dataSource.ecodUsuario) => `${element.ecodUsuario}`},
    { columnDef: 'Estatus',       header: 'Estatus',    cell: (element= this.dataSource.Estatus) => `${element.Estatus}`},
    { columnDef: 'Nombres',       header: 'Nombres',    cell: (element= this.dataSource.Nombres) => `${element.Nombres}`},
    { columnDef: 'CURP',          header: 'CURP',    cell: (element= this.dataSource.tCRUP) => `${element.tCRUP}`},
    { columnDef: 'RFC',           header: 'RFC',    cell: (element= this.dataSource.tRFC) => `${element.tRFC}`},
    { columnDef: 'Fh. Creacion',  header: 'Fh. Creacion',    cell: (element= this.dataSource.fhCreacion) => `${element.fhCreacion}`},
  ]

  filtrodatas = [
    {Nombre : 'ID',         filtroREl:'filtroForm.value.ecodUsuario',   formControlName:'ecodUsuario',  tipos:'text'},
    {Nombre : 'Estatus',    filtroREl:'filtroForm.value.Estatus',       formControlName:'Estatus',      tipos:'select'},
    {Nombre : 'Nombres',    filtroREl:'filtroForm.value.Nombres',       formControlName:'Nombres',      tipos:'text'},
    {Nombre : 'CURP',       filtroREl:'filtroForm.value.tCRUP',         formControlName:'tCRUP',        tipos:'text'},
    {Nombre : 'RFC',        filtroREl:'filtroForm.value.tRFC',          formControlName:'tRFC',          tipos:'text'},
    {Nombre : 'Fh. Creacion', filtroREl:'filtroForm.value.fhCreacion',  formControlName:'fhCreacion',   tipos:'date'},

    
  ]

  displayedColumns = this.columns.map(c => c.columnDef);

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('paginator') paginator!: MatPaginator;

  constructor(
    private _services:UsuarioService,
    public dialog: MatDialog,

  ){}

  ngOnInit(): void {
    this.getRegistros();
    this.filtroForm = new FormGroup({
      'ecodUsuario': new FormControl('', []),
      'Estatus': new FormControl('',[]),
      'tCRUP': new FormControl('', []),
      'fhCreacion': new FormControl('', []),
      'Nombres': new FormControl('', []),
      'tRFC': new FormControl('', []),
    })
  }

  getRegistros(){
    this._services.getRegistros().then((response:any)=>{
      this.getdatos = (response);
      this.getdatos.forEach((element:any) => {
        this.opCliente.push({
          ecodUsuario:element.ecodUsuario,
          fhCreacion:element.fhCreacion,
          tCRUP:element.tCRUP,
          tRFC:element.tRFC,
          Nombres:element.Nombres,
          Estatus:element.Estatus,

        })
      });    
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
        data: { titulo: "Detalle de usuario",usuario:response.sqlusuario}

      });  
    })
  
  }
  filtro(data:any){
    console.log(data);

    this.dataSource = this.opCliente.filter(state => state.ecodUsuario.toLowerCase().indexOf( this.filtroForm.value.ecodUsuario.toLowerCase()) >= 0)
    .filter(state => state.Nombres.toLowerCase().indexOf( this.filtroForm.value.Nombres.toLowerCase()) >= 0)
    .filter(state => state.tRFC.toLowerCase().indexOf( this.filtroForm.value.tRFC.toLowerCase()) >= 0) 
    .filter(state => state.tCRUP.toLowerCase().indexOf( this.filtroForm.value.tCRUP.toLowerCase()) >= 0)
    .filter(state => state.fhCreacion.toLowerCase().indexOf( this.filtroForm.value.fhCreacion.toLowerCase()) >= 0) 
    .filter(state => state.Estatus.toLowerCase().indexOf( this.filtroForm.value.Estatus.toLowerCase()) >= 0); 
    
    
  }
  mostrarfiltro(){
    this.mostrar = !this.mostrar; 
  }

}
