import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AnalysisComponent } from './analysis.component';
import { TestingComponent } from './testing.component';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  declarations: [
    AnalysisComponent,
    AppComponent,
    TestingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
