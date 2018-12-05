import { Component, OnInit, Input } from '@angular/core';
import { SafeStyle, disableDebugTools, DomSanitizer } from '@angular/platform-browser';
import { ThemeService } from 'src/app/theme';

@Component({
  selector: 'app-textfield-filled',
  templateUrl: './textfield-filled.component.html',
  styleUrls: ['./textfield-filled.component.scss']
})
export class TextfieldFilledComponent implements OnInit {

  @Input() themeVariable: string;
  @Input() name: string;
  @Input() defaultText: string = "";
  @Input() isTextarea: Boolean = false;
  @Input() hasDisabled: Boolean;

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