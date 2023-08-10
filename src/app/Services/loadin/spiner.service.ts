import { Injectable } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
@Injectable({
  providedIn: 'root'
})
export class SpinerService {

  constructor(
    private spinerService:NgxSpinnerService
  ) { }
  
  llamarspiner(){
    this.spinerService.show();
  }
  detenerspiner(){
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinerService.hide();
    }, 1000);
  }

}
