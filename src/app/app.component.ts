import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ThemeService } from './theme';
import { DomSanitizer } from '@angular/platform-browser';
import { Theme } from './theme/symbols';

@Component({
  selector: 'theme-showcase-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  themes: Theme[] = this.themeService.getAllThemes();
  index: number = this.themeService.getActiveThemeIndex();
  active: Theme;
  themeVariableNumber: Object;
  title: string;
  convert = require('color-convert');
  value: number = 0;
  slidersVisibility: Boolean = false;
  sliderValue: Object;
  displayedColors: Object[];
  themingColors: Object[];

  constructor(private themeService: ThemeService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    setInterval(() => {
      this.value = this.value === 100 ? 0 : this.value + 10;
    }, 1000);
    this.updateTheme();
  }

  prevTheme() {
    if (this.index > 0) {
      this.index = this.index - 1;
    } else {
      this.index = this.themes.length - 1;
    }
    this.updateTheme();
  }

  nextTheme() {
    if (this.index < this.themes.length - 1) {
      this.index = this.index + 1;
    } else {
      this.index = 0;
    }
    this.updateTheme();
  }

  updateTheme() {
    this.themeService.setTheme(this.themes[this.index].name);
    this.active = this.themeService.getActiveTheme();
    this.title = this.active.name.replace("-", " ").toUpperCase();
    this.updateThemeVariableArray();
    this.updateSlider();
    this.themeVariableNumber = this.sanitizer.bypassSecurityTrustStyle('--variable-number: ' + (this.displayedColors.length + 1));
  }

  updateThemeVariableArray() {
    this.displayedColors = [];
    this.themingColors = [];
    for (let variableName in this.active.properties) {
      if (!variableName.startsWith("--on-") && variableName != "--surface" && variableName != "--background") {
        this.displayedColors.push(variableName);
      }
      if (!variableName.endsWith("-light") && !variableName.endsWith("-dark")) {
        this.themingColors.push(variableName);
      }
    }
  }

  updateSlider() {
    this.sliderValue = {};
    for (let variableName in this.active.properties) {
      if (!variableName.endsWith("-light") && !variableName.endsWith("-dark")) {
        this.sliderValue = { ... this.sliderValue, ... { [variableName]: this.updateSliderValue(variableName) } }
      }
    }
  }

  updateSliderValue(variable) {
    var rgb = JSON.parse("[" + this.active.properties[variable] + "]");
    if (this.isColorType(variable)) {
      var hsl = this.convert.rgb.hsl(rgb);
      return hsl[0];
    }
    return rgb[0];
  }

  updateColor(value, variable) {
    if (this.isColorType(variable)) {
      var rgb = this.convert.hsl.rgb(value, 85, 50);
      this.themeService.updateTheme(this.active.name, { [variable]: `${rgb[0]},${rgb[1]},${rgb[2]}` });
      if (this.active.properties[variable + "-light"]) {
        rgb = this.convert.hsl.rgb(value, 85, 70);
        this.themeService.updateTheme(this.active.name, { [variable + "-light"]: `${rgb[0]},${rgb[1]},${rgb[2]}` });
      }
      if (this.active.properties[variable + "-dark"]) {
        rgb = this.convert.hsl.rgb(value, 85, 30);
        this.themeService.updateTheme(this.active.name, { [variable + "-dark"]: `${rgb[0]},${rgb[1]},${rgb[2]}` });
      }
    } else {
      this.themeService.updateTheme(this.active.name, { [variable]: `${value},${value},${value}` });
    }
  }

  isColorType(themeVariable): Boolean {
    const allEqual = arr => arr.every(v => v === arr[0])
    var rgb = JSON.parse("[" + this.active.properties[themeVariable] + "]");
    if (allEqual(rgb)) {
      return false;
    } else {
      return true;
    }
  }

  toggleTheming() {
    this.slidersVisibility = !this.slidersVisibility;
  }

}
