import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  signal,
} from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-formly-example',
  templateUrl: './formly-example.component.html',
  // standalone: true,
  // imports: [MatExpansionModule],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./formly-example.component.css'],
})
export class FormlyExampleComponent {
  // readonly panelOpenState = signal(false);

  isEnable: boolean = false;
  today = new Date();

  form = new FormGroup({});
  model = { DateOfBirth: null };
  fields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'input',
      props: {
        label: 'Email address',
        placeholder: 'Enter email address',
        required: true,
      },
    },
    {
      key: 'number',
      type: 'input',
      // you can use type: 'number' also but not in email use type: 'email'
      props: {
        label: 'Contact Number',
        placeholder: 'Enter phone number',
        required: true,
      },
      expressions: {
        'props.disabled': 'model.email? false: true',
      },
    },
    {
      key: 'country',
      type: 'select',
      // you can use type: 'number' also but not in email use type: 'email'
      props: {
        label: 'Select Country',
        options: [
          { value: 'india', label: 'India' },
          { value: 'america', label: 'America' },
        ],
        required: true,
      },
      expressions: {
        'props.disabled': 'model.number? false: true',
      },
    },
    {
      key: 'gender',
      type: 'radio',
      props: {
        label: 'Select Gender',
        options: [
          { value: 'male', label: 'Male' },
          { value: 'female', label: 'Female' },
        ],
        required: true,
        labelPosition: 'after',
      },
      expressions: {
        'props.disabled': 'model.country? false:true',
        'props.options':
          "model.country === 'india'? [{ value: 'male', label: 'Male' }, { value: 'female', label: 'Female' }]: [{ value: 'male', label: 'Male' },{ value: 'female', label: 'Female' }, {value: 'other', label: 'Other'}]",
      },
    },
    {
      key: 'hobbies',
      type: 'multicheckbox',
      templateOptions: {
        label: 'Select your hobbies',
        options: [
          { value: 'reading', label: 'Reading' },
          { value: 'traveling', label: 'Traveling' },
          { value: 'cricket', label: 'Playing Cricket' },
          { value: 'volleyball', label: 'Playing Volleyball' },
          { value: 'chessGame', label: 'Playing Chess game' },
          { value: 'treePlantation', label: 'Tree Planting' },
        ],
        labelPosition: 'before', // default is after
      },
      expressions: {
        'props.disabled': `model.gender ? false : true`,
      },
    },
    {
      key: 'message',
      type: 'textarea',
      props: {
        label: 'Message',
        placeholder: 'Enter your valuable message to us...',
        rows: 10,
      },
      expressions: {
        'props.disabled': 'model.hobbies? false : true',
      },
      validation: {
        messages: {
          required: 'Message box contains more than 15 characters',
        },
      },
    },
    {
      key: 'DateOfBirth',
      type: 'datepicker',
      templateOptions: {
        label: 'Date of Birth',
        placeholder: 'Select date',
        required: true,
      },
      expressions: {
        'props.disabled': 'model.message ? false : true',
      },
    },
  ];

  onSubmit(model: any) {
    console.log(model);
  }
}
