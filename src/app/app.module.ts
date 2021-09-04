import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AlertModule } from 'ngx-bootstrap/alert';  

import { AppComponent } from './app.component';
import { FirstCompComponent } from './first-comp/first-comp.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstCompComponent,
  ],
  imports: [
    BrowserModule, AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
