import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgComponent } from './components/svg/svg.component';
import { SvgDefinitionsComponent } from './components/svg-definitions/svg-definitions.component';

@NgModule({
  declarations: [
    SvgComponent,
    SvgDefinitionsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SvgComponent,
    SvgDefinitionsComponent
  ]
})
export class SharedModule { }