import { CanActivateFn } from '@angular/router';

export const canActivateGuard: CanActivateFn = (route, state) => {
  let Menu : any = [];
  let puerta = 0 ;
  Menu = localStorage.getItem('Menu');
  if (localStorage.getItem('logintoken')) {
    JSON.parse(Menu).forEach((element:any) => {
      if(element.urlSubMenu ==window.location.pathname || element.urlController == window.location.pathname ){
          puerta = 1;     
      }
    });
  }

  if (puerta==1) {
    return true;
  }
  else{
    return false;
  }
};
