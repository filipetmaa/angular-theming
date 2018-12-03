import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonContainedComponent } from './button-contained/button-contained.component';
import { ButtonOutlinedComponent } from './button-outlined/button-outlined.component';
import { ButtonTextComponent } from './button-text/button-text.component';
import { ButtonFabComponent } from './button-fab/button-fab.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RadioComponent } from './radio/radio.component';
import { SwitchComponent } from './switch/switch.component';

@NgModule({
  declarations: [
    ButtonContainedComponent,
    ButtonOutlinedComponent,
    ButtonTextComponent,
    ButtonFabComponent,
    CheckboxComponent,
    RadioComponent,
    SwitchComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonContainedComponent,
    ButtonOutlinedComponent,
    ButtonTextComponent,
    ButtonFabComponent,
    CheckboxComponent,
    RadioComponent,
    SwitchComponent
  ]
})
export class PureMaterialModule { }