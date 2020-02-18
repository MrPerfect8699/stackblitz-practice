import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {OrderModule } from 'ngx-order-pipe';
 
import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, OrderModule ],
  declarations: [ AppComponent, Page1Component ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
