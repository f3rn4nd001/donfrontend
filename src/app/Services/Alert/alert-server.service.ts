import { Injectable } from '@angular/core';
import * as alertify from 'alertifyjs';

@Injectable({
  providedIn: 'root'
})
export class AlertServerService {

  constructor() { }
  validaderrores(value:any){
    if(value==500){
      alertify.alert().setting({
        'closable':false,
        'resizable':false,
        'title':`Error desde la parte del servidor.` ,
        'message':"Hay un problema en el servidor. "
      }).show();
    }
    if (value==200) {
      alertify.success("Todo se ha procesado de forma correcta")
    }
    if (value==202) {
      alertify.success("La petición ha sido aceptada pero todavía no se ha completado")
    }
    if(value==400){
      alertify.alert().setting({
        'closable':false,
        'resizable':false,
        'title':`Algo ha ido mal con la petición.` ,
        'message':" Si recibes este error, prueba a refrescar la página o actualizar tu navegador."
      }).show();
    }
    if(value==401){
      alertify.alert().setting({
        'closable':false,
        'resizable':false,
        'title':`Algo ha ido mal con la petición.` ,
        'message':"No tienes permiso para recibir ese contenido."
      }).show();
    }
    if (value==422) {
      alertify.error("No pudo procesar las instrucciones contenidas")
    }
    if(value==503){
      alertify.alert().setting({
        'closable':false,
        'resizable':false,
        'title':`El servidor no está disponible en ese momento.` ,
        'message':"Prueba de nuevo en unos minutos."
      }).show();
    }
    if (value==429) {
      alertify.error("Intentelo nuevmente en un minuto");
    }
    
  }
  ErrorGuardar(value:any){
    alertify.alert().setting({
      'closable':false,
      'resizable':false,
      'title':`Porfavor corriga los siguientes errores.` ,
      'message':`${value}`
    }).show();
  }
  
  async Guardar(){
     return await new Promise( ( resolve, reject ) => { 
      alertify.confirm("Guardar","¿Deseas guardar la información?",
        () => resolve(1),
        () => resolve(0)
      );
    });
  }
}
