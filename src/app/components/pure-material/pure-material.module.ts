import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonContainedComponent } from './button-contained/button-contained.component';
import { ButtonOutlinedComponent } from './button-outlined/button-outlined.component';
import { ButtonTextComponent } from './button-text/button-text.component';
import { ButtonFabComponent } from './button-fab/button-fab.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RadioComponent } from './radio/radio.component';
import { SwitchComponent } from './switch/switch.component';
import { SliderComponent } from './slider/slider.component';
import { ProgressCircularComponent } from './progress-circular/progress-circular.component';
import { ProgressLinearComponent } from './progress-linear/progress-linear.component';

@NgModule({
  declarations: [
    ButtonContainedComponent,
    ButtonOutlinedComponent,
    ButtonTextComponent,
    ButtonFabComponent,
    CheckboxComponent,
    RadioComponent,
    SwitchComponent,
    SliderComponent,
    ProgressCircularComponent,
    ProgressLinearComponent
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
    SwitchComponent,
    SliderComponent,
    ProgressCircularComponent,
    ProgressLinearComponent
  ]
})
export class PureMaterialModule { }