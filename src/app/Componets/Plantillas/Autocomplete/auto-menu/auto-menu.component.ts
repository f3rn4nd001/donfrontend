import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { ServicesService } from "../../services/services.service";
import { MenuService } from "../../../../Services/Catalogo/Menu/menu.service";

@Component({
  selector: 'app-auto-menu',
  templateUrl: './auto-menu.component.html',
})

export class AutoMenuComponent implements OnInit {

  ecodMenuctl = new FormControl('');
  filteredStates: Observable<any[]>;
  public datos: any = {};
  public metodos: any = {eNumeroRegistros:100, tMetodoOrdenamiento:'ecodMenu', orden:'DESC' };
  public states: any= [];

  constructor(
    private _ServicesService:ServicesService,
    private _MenuService:MenuService
    ) {
    this.filteredStates = this.ecodMenuctl.valueChanges.pipe(startWith(''),map(state => (state ? this._filterStates(state) : this.states.slice())),);
  }

  ngOnInit(): void {
    this._ServicesService.diaparadorAutocomprit.subscribe(res=>{
      if (res.ecodMenu ) {this.datos.ecodMenu=res.ecodMenu.ecodMenu;}
      if (res.Menu ) {this.datos.tNombre=res.ecodMenu.Menu;}

    });     
    console.log(this.datos);
    
    let data:any={};
    data.metodos=this.metodos;
    this._MenuService.getRegistros(data).then((response:any)=>{      
      response.forEach((element:any) => {
        this.states.push({
          tNombre:element.tNombre,
          ecodMenu:element.ecodMenu,
          Iconos:element.Iconos
        })        
      });
    })    
    
  }

  displayStates(data: any): string {return data ? data.tNombre  : data;}

  selectopcion(){  
    console.log(this.ecodMenuctl.value);
    
    this._ServicesService.diaparadorAutocomprit.emit({ecodMenu:this.ecodMenuctl.value})    
  }

  private _filterStates(event: any) {    
    this._ServicesService.diaparadorAutocomprit.emit({ecodMenu:null})
    return this.states.filter((state: { tNombre: { toLowerCase: () => (string | null)[]; }; }) => state.tNombre.toLowerCase().indexOf( this.ecodMenuctl.value) >= 0);
  }
}
