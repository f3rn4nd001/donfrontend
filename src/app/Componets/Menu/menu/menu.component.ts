import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  public datos: any = [];
  public menusub :any = [];
  public menu :any = [];

  ngOnInit(): void {

    const map = new Map();
    this.datos = localStorage.getItem('Menu');
    JSON.parse(this.datos).forEach((element:any) => {
      if(!map.has(element.submenu )){ 
        map.set(element.submenu, true);    // set any value to Map
        this.menusub.push({
          submenu:element.submenu, 
          Menu:element.Menu,
          url:element.urlSubMenu
        });
      }
      if(!map.has(element.Menu)){
        map.set(element.Menu, true);    // set any value to Map
        this.menu.push({
          Menu:element.Menu, 
          Iconos:element.Iconos
        });
      }
    })
  }
  btnLogout() {    
    localStorage.removeItem('logintoken');
    localStorage.removeItem('Menu');
    localStorage.removeItem('ecodCorreo');
    localStorage.removeItem('TipoUsuario');
  }
}
