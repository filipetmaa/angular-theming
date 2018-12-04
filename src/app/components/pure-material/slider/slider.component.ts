import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SafeStyle, disableDebugTools, DomSanitizer } from '@angular/platform-browser';
import { ThemeService } from 'src/app/theme';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  @Input() themeVariable: string;
  @Input() name: string;
  @Input() isChecked: Boolean;
  @Input() currentValue: number;
  @Input() minValue: number;
  @Input() maxValue: number;
  @Input() hasDisabled: Boolean;

  @Output() isClicked = new EventEmitter();
  @Output() isSlided = new EventEmitter();

  active = this.themeService.getActiveTheme();
  componentStyle: SafeStyle;

  constructor(private themeService: ThemeService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    for (let variableName in this.active.properties) {
      if (variableName == this.themeVariable) {
        variableName = variableName.replace("--", "");
        if (variableName != "primary") {
          if (variableName.startsWith("primary") || variableName.startsWith("on-")) {
            this.componentStyle = this.sanitizer.bypassSecurityTrustStyle('--primary:var(--' + variableName + ')');
          } else {
            this.componentStyle = this.sanitizer.bypassSecurityTrustStyle('--primary:var(--' + variableName + ');--on-primary:var(--on-' + variableName.replace("-light", "").replace("-dark", "").replace("-variant", "") + ')');
          }
        } else {
          this.componentStyle = this.sanitizer.bypassSecurityTrustStyle('');
        }
      }
    }
    this.currentValue = this.currentValue;
    this.minValue = this.minValue;
    this.maxValue = this.maxValue;
  }

}