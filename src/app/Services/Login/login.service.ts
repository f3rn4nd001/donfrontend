import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/app/environments/environment.prod';
import {AlertServerService} from '../Alert/alert-server.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private _service:AlertServerService
  ) { }

  poslogin(data:any){
    let json=JSON.stringify(data);
		var api = `${environment.direcurl}api/Login`;	
		return new Promise( ( resolve, reject ) => { 
			axios.post(api,{datos:JSON.parse(json),haders:"Ox_mSak@t~r}uh_GoerfQly_=EM$4iIYk#v4oFguL)TY2b0~O["})
			.then(response => {        
          this._service.validaderrores(response);
          resolve(response.data);   
			}).catch((error) => {this._service.validaderrores(error.response);
        reject(error);
      });
		});
	}

  postValidadContrasena(data:any){
    var api = `${environment.direcurl}api/Login/postValidadContrasena`;	
    let json=JSON.stringify(data);
		return new Promise( ( resolve, reject ) => { 
			axios.post(api,{datos:json,headers:environment.header})
			.then(response => {        
					resolve(response.data);   
			}).catch((error) => {          
        reject(error);
      });
		});
  }

  
  postLogout(data:any){
    var api = `${environment.direcurl}api/Login/postLogout`;	
    let json=JSON.stringify(data);
		return new Promise( ( resolve, reject ) => { 
			axios.post(api,{datos:json,headers:environment.header})
			.then(response => {        
					resolve(response.data);   
			}).catch((error) => {          
        reject(error);
      });
		});
  }


  postValidadUrl(data:any){
    var api = `${environment.direcurl}api/Login/postValidadVista`;	
    let json=JSON.stringify(data);
		return new Promise( ( resolve, reject ) => { 
			axios.post(api,{datos:json,headers:environment.header})
			.then(response => {        
					resolve(response.data);   
			}).catch((error) => {          
        reject(error);
      });
		});
  }
}
