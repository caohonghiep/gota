import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { MainComponent }         from './main.component';
import { mainRouting }  from './main.routing';

import {FooterComponent} from "../home/components/footer/footer.component";
import {HeaderComponent} from "../home/components/header/header.component";
import {MenuComponent} from "../home/components/menu/menu.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    mainRouting
  ],
  declarations: [
    MainComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent
  ],
  providers: [
  ],
  bootstrap: [ MainComponent ]
})
export class MainModule {
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/