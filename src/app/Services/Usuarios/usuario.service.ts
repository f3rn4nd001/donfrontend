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
			axios.get(api)
			.then(response => {        
					resolve(response.data);  
          this._SpinerService.detenerspiner(); 
          this._service.validaderrores(response.status);
			}).catch((error) => {this._service.validaderrores(error.response);
        reject(error);
      });
		});
   }
   
  postRegistrar(data:any){
    let json=JSON.stringify(data);
		var api = `${environment.direcurl}Catalogo/usuario/registrar`;	
		return new Promise( ( resolve, reject ) => { 
			axios.post(api,{datos:JSON.parse(json)})
			.then(response => {        
					resolve(response.data);   
          this._service.validaderrores(response.status);
			}).catch((error) => {this._service.validaderrores(error.response);
        reject(error);
      });
		});
  }

  getDetalle(data:any){
    var api = `${environment.direcurl}Catalogo/usuario/detalles`;	
    this._SpinerService.llamarspiner();
    let json=JSON.stringify(data);
		return new Promise( ( resolve, reject ) => { 
			axios.post(api,{datos:json})
			.then(response => {        
					resolve(response.data);   
          this._SpinerService.detenerspiner();
          this._service.validaderrores(response.status);
			}).catch((error) => {          
        this._SpinerService.detenerspiner();
        this._service.validaderrores(error.response.status);
        reject(error);
      });
		});
  }
}
