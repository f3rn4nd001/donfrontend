import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { LoginService } from "../../../Services/Login/login.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public FormLogin: any = FormGroup;
  constructor(
    private _service:LoginService
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
    this._service.poslogin(data).then((response:any)=>{
      console.log(response);
      
    });
  }
}
