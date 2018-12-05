import { Component, OnInit, Input } from '@angular/core';
import { SafeStyle, DomSanitizer } from '@angular/platform-browser';
import { ThemeService } from 'src/app/theme';

@Component({
  selector: 'app-showcase-title',
  templateUrl: './showcase-title.component.html',
  styleUrls: ['./showcase-title.component.scss']
})
export class ShowcaseTitleComponent implements OnInit {

  @Input() themeVariable: string;
  @Input() name: string;

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