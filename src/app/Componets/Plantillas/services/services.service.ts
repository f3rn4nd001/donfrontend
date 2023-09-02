import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
@Output() diaparadorAutocomprit:EventEmitter<any>=new EventEmitter();
  constructor() { }
}
