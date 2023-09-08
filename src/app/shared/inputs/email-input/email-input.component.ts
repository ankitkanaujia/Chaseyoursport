import { Component, forwardRef, OnInit } from '@angular/core';
import {
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
  FormControl,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-email-input',
  template: `
    <span class="p-float-label">
      <input id="email" type="text" pInputText [formControl]="emailControl" />
      <label for="email">Email</label>
    </span>
    <div *ngIf="emailControl.invalid && emailControl.touched">
      <div *ngIf="emailControl.errors?.required">Email is required.</div>
      <div *ngIf="emailControl.errors?.email">Invalid email format.</div>
    </div>
  `,
  styleUrls: ['./email-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EmailInputComponent),
      multi: true
    }
  ]
})
export class EmailInputComponent implements ControlValueAccessor {
  constructor() {}
  emailControl = new FormControl('', [Validators.required, Validators.email]);

  writeValue(value: any): void {
    this.emailControl.setValue(value, { emitEvent: false });
  }

  registerOnChange(fn: any): void {
    this.emailControl.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.emailControl.markAsTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.emailControl.disable() : this.emailControl.enable();
  }
}
