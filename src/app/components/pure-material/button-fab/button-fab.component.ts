import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SafeStyle, DomSanitizer } from '@angular/platform-browser';
import { ThemeService } from 'src/app/theme';

@Component({
  selector: 'app-button-fab',
  templateUrl: './button-fab.component.html',
  styleUrls: ['./button-fab.component.scss']
})
export class ButtonFabComponent implements OnInit {

  @Input() themeVariable: string;
  @Input() hasDisabled: Boolean;
  @Input() icon: string;

  @Output() isClicked = new EventEmitter();

  active = this.themeService.getActiveTheme();
  componentStyle: SafeStyle;

  constructor(private themeService: ThemeService, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    for (let variableName in this.active.properties) {
      if (variableName == this.themeVariable) {
        variableName = variableName.replace("--", "");
        if (!variableName.startsWith("on-") && variableName != "surface" && variableName != "background") {
          if (variableName != "primary") {
            if (variableName.startsWith("primary")) {
              this.componentStyle = this.sanitizer.bypassSecurityTrustStyle('--primary:var(--' + variableName + ')');
            } else {
              this.componentStyle = this.sanitizer.bypassSecurityTrustStyle('--primary:var(--' + variableName + ');--on-primary:var(--on-' + variableName.replace("-light", "").replace("-dark", "").replace("-variant", "") + ')');
            }
          } else {
            this.componentStyle = this.sanitizer.bypassSecurityTrustStyle('');
          }
        }
      }
    }
  }

}