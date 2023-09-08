import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailInputComponent } from './inputs/email-input/email-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [EmailInputComponent],
  imports: [CommonModule, ReactiveFormsModule, InputTextModule],
  exports: [EmailInputComponent]
})
export class SharedModule {}
