import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, NgModel } from '@angular/forms';
import { FormlyField, FormlyFieldConfig } from '@ngx-formly/core';
import {
  FormBuilder,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-formly-stepper',
  templateUrl: './formly-stepper.component.html',
  styleUrls: ['./formly-stepper.component.css'],
})
export class FormlyStepperComponent {
  // stepper code
  private _formBuilder = inject(FormBuilder);

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  // formly form code
  isNameNext: boolean = false;
  isPhoneNext: boolean = false;
  isGenderNext: boolean = false;
  form1 = new FormGroup({});
  model1 = {};
  field1: FormlyFieldConfig[] = [
    {
      key: 'input',
      type: 'input',
      props: {
        label: 'Name',
        placeholder: 'Enter your name',
        required: true,
        change: (field, event) => {
          if((event.target.value).length > 10) {
            this.isNameNext = true;
          }
          console.log('Input changed:', event.target.value);
        }
      },
    },
  ];

  form2 = new FormGroup({});
  model2 = {};
  field2: FormlyFieldConfig[] = [
    {
      key: 'number',
      type: 'number',
      props: {
        label: 'Phone number',
        placeholder: 'Enter your phone number',
        required: true,
        change: (field, event) => {
          if((event.target.value).length === 10) {
            this.isPhoneNext = true;
          }
          console.log('Input changed:', event.target.value);
        }
      },
    },
  ];

  form3 = new FormGroup({});
  model3 = {};
  field3: FormlyFieldConfig[] = [
    {
      key: 'gender',
      type: 'radio',
      props: {
        options: [
          { value: 'Male', label: 'Male' },
          { value: 'Female', label: 'Female' },
        ],
        click: (field, event) => {
          this.isGenderNext = true;
          console.log('Input changed:', event.target.value);
        }
      },
    },
  ];

  userData: any[] = [];
  data1(value: any) {
    this.userData.push(value);
  }
  data2(value: any) {
    this.userData.push(value);
  }
  data3(value: any) {
    this.userData.push(value);
    console.log(this.userData);
    alert(this.userData[0].input + " " + this.userData[1].number + " " + this.userData[2].gender);
  }

}
