import { NgModule, inject } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormForMaterialUIComponent } from './form-for-material-ui/form-for-material-ui.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyExampleComponent } from './formly-example/formly-example.component';
import { FormlyMatInputModule } from '@ngx-formly/material/input';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { MatButtonModule } from '@angular/material/button';
import { FormlyMatRadioModule } from '@ngx-formly/material/radio';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { FormlyMatDatepickerModule } from '@ngx-formly/material/datepicker';
import { FormlyStepperComponent } from './formly-stepper/formly-stepper.component';

import { MatStepperModule } from '@angular/material/stepper';

@NgModule({
  declarations: [AppComponent, FormlyExampleComponent, FormlyStepperComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    FormForMaterialUIComponent,
    FormlyMaterialModule,
    FormlyMatInputModule,
    MatButtonModule,
    FormlyMatRadioModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    FormlyMatDatepickerModule,

    MatStepperModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
