import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customers/customer.component';
import { CounterInputComponent } from './components/counter-input/counter-input.component';
import { CustomInputComponent } from "./components/custom-input/custom-input.component";

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    CustomerComponent,
    CounterInputComponent,
    CustomInputComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
