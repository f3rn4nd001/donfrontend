import { Component,OnInit } from '@angular/core';
import { LoginService } from "../../../Services/Login/login.service";
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  public datos: any = [];
  public menusub :any = [];
  public menu :any = [];
constructor(
  private _LoginService:LoginService
){}
  ngOnInit(): void {

    const map = new Map();
    this.datos = localStorage.getItem('Menu');
    JSON.parse(this.datos).forEach((element:any) => {
      if(!map.has(element.Menu)){
        map.set(element.Menu, true);    // set any value to Map
        this.menu.push({
          Menu:element.Menu, 
          Iconos:element.Iconos
        });
      }

      if(!map.has(element.submenu )){ 
        map.set(element.submenu, true);    // set any value to Map
        this.menusub.push({
          submenu:element.submenu, 
          Menu:element.Menu,
          url:element.urlSubMenu
        });
      }
     
    })
  }
  btnLogout() {    
    let data :any = []
    this._LoginService.postLogout(data).then((response:any)=>{})
    localStorage.removeItem('logintoken');
    localStorage.removeItem('Menu');
    localStorage.removeItem('ecodCorreo');
    localStorage.removeItem('TipoUsuario');  

    }
    
}
