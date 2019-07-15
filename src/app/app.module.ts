import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CountryComponent } from './country/country.component';
import { DetailsComponent } from './details/details.component';

import { HttpClientModule } from '@angular/common/http';
import {MatExpansionModule, MatInputModule} from '@angular/material';
// import {MaterialModule} from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // MaterialModule,
    MatExpansionModule, MatInputModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
