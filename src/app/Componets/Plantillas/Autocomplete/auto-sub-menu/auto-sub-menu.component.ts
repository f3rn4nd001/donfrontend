import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { ServicesService } from "../../services/services.service";
import { SubmenuService } from "../../../../Services/Catalogo/SubMenu/submenu.service";

@Component({
  selector: 'app-auto-sub-menu',
  templateUrl: './auto-sub-menu.component.html',
})

export class AutoSubMenuComponent implements OnInit{
  ecodSubMenuctl = new FormControl('');
  filteredStates: Observable<any[]>;
  public datos: any = {};
  public metodos: any = {eNumeroRegistros:100, tMetodoOrdenamiento:'ecodSubMenu', orden:'DESC' };
  public states: any= [];

  constructor(private _ServicesService:ServicesService, private _SubmenuService:SubmenuService) {this.filteredStates = this.ecodSubMenuctl.valueChanges.pipe(startWith(''),map(state => (state ? this._filterStates(state) : this.states.slice())),);}

  ngOnInit(): void {
    this._ServicesService.diaparadorAutocomprit.subscribe(res=>{
      if (res.ecodSubmenu ) {this.datos.ecodSubmenu=res.ecodSubmenu.ecodSubmenu;}
      if (res.Menu ) {this.datos.tNombre=res.ecodMenu.Menu;}
    });         
    let data:any={};
    data.metodos=this.metodos;
    this._SubmenuService.getRegistros(data).then((response:any)=>{  
      console.log(response);
          
      response.forEach((element:any) => {
        this.states.push({
          tNombre:element.tNombre,
          ecodSubmenu:element.ecodSubmenu,
          tUrl:element.tUrl
        })        
      });
    })    
  }

  displayStates(data: any): string {return data ? data.tNombre  : data;}

  selectopcion(){this._ServicesService.diaparadorAutocomprit.emit({ecodSubmenu:this.ecodSubMenuctl.value})}

  private _filterStates(event: any) {    
    this._ServicesService.diaparadorAutocomprit.emit({ecodSubmenu:null})
    return this.states.filter((state: { tNombre: { toLowerCase: () => (string | null)[]; }; }) => state.tNombre.toLowerCase().indexOf( this.ecodSubMenuctl.value) >= 0);
  }
}
