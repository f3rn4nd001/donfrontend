import { Component,OnInit } from '@angular/core';
import {BnNgIdleService} from "bn-ng-idle";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'donfrontend';
  public logintoken : any = '';
  public Menu : any = '';
    constructor(
      private bnIdle: BnNgIdleService
    ) {}
  ngOnInit(): void {
    this.logintoken = localStorage.getItem('logintoken');
    this.Menu = localStorage.getItem('Menu');
    let res = {};
    this.bnIdle.startWatching(1800).subscribe((isTimedOut: boolean) => {
      if (res) {
        localStorage.removeItem('logintoken');
        localStorage.removeItem('Menu');
        window.location.href = "/login";
      }});

  }
}
