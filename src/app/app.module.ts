import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormForMaterialUIComponent } from './form-for-material-ui/form-for-material-ui.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormForMaterialUIComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
