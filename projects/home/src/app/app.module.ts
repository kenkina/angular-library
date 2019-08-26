import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// business library
import { BusinessCommonModule } from 'business-common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BusinessCommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
