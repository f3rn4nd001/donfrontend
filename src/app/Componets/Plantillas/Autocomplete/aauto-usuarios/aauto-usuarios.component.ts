import { Component,OnInit } from '@angular/core';
import { FormControl} from '@angular/forms';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-aauto-usuarios',
  templateUrl: './aauto-usuarios.component.html',
  styleUrls: ['./aauto-usuarios.component.css']
})
export class AautoUsuariosComponent implements OnInit{
 constructor(
  private _ServicesService:ServicesService
){}
  ngOnInit(): void {
    this.getcomprenento();
  
  }
  getcomprenento(){
    let data = 'usuario'
    
  }
  filter(event: any) {
  
  }
}
