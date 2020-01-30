import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Exo1Component } from './exo1/exo1.components';
import { Exo2Component } from './exo2/exo2.component';

@NgModule({
  declarations: [
    AppComponent ,
    Exo1Component,
    Exo2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
