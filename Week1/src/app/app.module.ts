import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Component1Component } from './component1/component1.component';
import { Pipe1Pipe } from './pipe1.pipe';
import { Directive1Directive } from './directive1.directive';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
import { FilterPipePipe } from './filter-pipe.pipe';
import { HoverStyleDirective } from './hover-style.directive';
import { CreateContentComponent } from './create-content/create-content.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Pipe1Pipe,
    Directive1Directive,
    ContentCardComponent,
    ContentListComponent,
    FilterPipePipe,
    HoverStyleDirective,
    CreateContentComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
