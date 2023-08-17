import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { LoginService } from "../../../Services/Login/login.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public FormLogin: any = FormGroup;
  constructor(
    private _service:LoginService,
    public router: Router,

  ){

  }
  ngOnInit():void{
    
    this.FormLogin = new FormGroup({
      'email': new FormControl('', Validators.required),
      'password': new FormControl('', [Validators.required])
    });
  }

  Login(){
    let data = this.FormLogin.value;
    localStorage.removeItem('logintoken');
    localStorage.removeItem('Menu');
    localStorage.removeItem('ecodCorreo');
    localStorage.removeItem('TipoUsuario');
    this._service.poslogin(data).then((response:any)=>{
      if (response.token && response.Menu) {        
        localStorage.setItem('Menu', JSON.stringify(response.Menu));
        localStorage.setItem('logintoken', JSON.stringify(response.token));
        localStorage.setItem('ecodCorreo', JSON.stringify(response.ecodCorreo));
        localStorage.setItem('TipoUsuario', JSON.stringify(response.TipoUsuario));
        window.location.href = "/home";
      }
      
    });
  }
}
