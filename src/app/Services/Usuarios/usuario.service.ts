import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/app/environments/environment';
import { AlertServerService } from '../Alert/alert-server.service';
import { SpinerService } from "../loadin/spiner.service";
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private _service:AlertServerService,
    public _SpinerService:SpinerService

   ) { }
   getRegistros(){
    var api = `${environment.direcurl}Catalogo/usuario/consulta`;	
    this._SpinerService.llamarspiner();
    return new Promise( ( resolve, reject ) => { 
			axios.post(api,{headers:environment.header})
			.then(response => {        
					resolve(response.data);  
          this._SpinerService.detenerspiner(); 
          this._service.validaderrores(response);
			}).catch((error) => {this._service.validaderrores(error.response);
        reject(error);
      });
		});
   }
   
  postRegistrar(data:any){
    let json=JSON.stringify(data);
		var api = `${environment.direcurl}Catalogo/usuario/registrar`;	
    this._SpinerService.llamarspiner();
		return new Promise( ( resolve, reject ) => { 
			axios.post(api,{datos:JSON.parse(json),headers:environment.header})
			.then(response => {        
					resolve(response.data);   
          this._SpinerService.detenerspiner(); 
          this._service.validaderrores(response);
			}).catch((error) => {
        console.log(error);
        
        this._SpinerService.detenerspiner();
        this._service.validaderrores(error.response);
        reject(error);
      });
		});
  }

  getDetalle(data:any){
    var api = `${environment.direcurl}Catalogo/usuario/detalles`;	
    this._SpinerService.llamarspiner();
    let json=JSON.stringify(data);
		return new Promise( ( resolve, reject ) => { 
			axios.post(api,{datos:json,headers:environment.header})
			.then(response => {        
					resolve(response.data);   
          this._SpinerService.detenerspiner();
          this._service.validaderrores(response);
			}).catch((error) => {          
        this._SpinerService.detenerspiner();
        this._service.validaderrores(error.response);
        reject(error);
      });
		});
  }
}
