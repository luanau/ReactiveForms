import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customers/customer.component';
import {CounterInputComponent} from './components/counter-input/counter-input.component'

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    CustomerComponent,
    CounterInputComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
