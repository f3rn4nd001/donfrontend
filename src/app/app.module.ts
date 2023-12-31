import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { objRutas } from './import';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './Componets/Menu/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
  ],
  imports: [
    objRutas,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
