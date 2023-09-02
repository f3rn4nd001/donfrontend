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
  public data:any={};

  constructor(
    private _service:LoginService,
    public router: Router,

  ){

  }
  ngOnInit():void{
    
    this.FormLogin = new FormGroup({
      'email': new FormControl('', [Validators.required,Validators.email]),
      'password': new FormControl('', [Validators.required])
    });
  }

  Login(){
    let str = "";

     this.data.email=this.FormLogin.email
    this.data.password =  this.FormLogin.password.replace(/[^\w\s]/gi, "") // Remove non word characters
    .trim() // Remove trailing and leadings spaces
    .replace(/\b\w/g, (s: string) => s.toUpperCase()) // Make the first letter of each word upper case

    localStorage.removeItem('logintoken');
    localStorage.removeItem('Menu');
    localStorage.removeItem('ecodCorreo');
    localStorage.removeItem('TipoUsuario');
    localStorage.removeItem('ecod');
    this._service.poslogin(this.data).then((response:any)=>{
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
