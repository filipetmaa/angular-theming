import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ThemeService } from './theme';
import { SafeStyle, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'theme-showcase-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  active = this.themeService.getActiveTheme();
  themes = this.themeService.getAllThemes();
  index = this.themeService.getActiveThemeIndex();
  title = this.active.name.replace("-", " ").toUpperCase();
  convert = require('color-convert');
  value = 0;
  slidersVisibility = false;
  sliderValue = {};
  themeVariableArray = [];

  constructor(private themeService: ThemeService, private sanitizer: DomSanitizer) {
    this.updateThemeVariableArray();
    this.updateSlider();
  }

  ngOnInit() {
    setInterval(() => {
      this.value = this.value === 100 ? 0 : this.value + 10;
    }, 1000);
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
  }

  updateThemeVariableArray() {
    this.themeVariableArray = [];
    for (let variableName in this.active.properties) {
      if (!variableName.startsWith("--on-") && variableName != "--surface" && variableName != "--background") {
        this.themeVariableArray.push(variableName);
      }
    }
  }

  updateSlider() {
    this.sliderValue = {};
    var rgb;
    const allEqual = arr => arr.every(v => v === arr[0])
    for (let key in this.active.properties) {
      if (!key.endsWith("-light") && !key.endsWith("-dark")) {
        rgb = JSON.parse("[" + this.active.properties[key] + "]");
        if (allEqual(rgb)) {
          this.sliderValue = { ... this.sliderValue, ... { [key]: this.updateSliderValue(key, 'shade') } }
        } else {
          this.sliderValue = { ... this.sliderValue, ... { [key]: this.updateSliderValue(key) } }
        }
      }
    }
  }

  updateSliderValue(variable, sliderType = "color") {
    var rgb = JSON.parse("[" + this.active.properties[variable] + "]");
    if (sliderType == "shade") {
      return rgb[0];
    }
    var hsl = this.convert.rgb.hsl(rgb);
    return hsl[0];
  }

  updateColor(value, variable, colorType = "color") {
    if (colorType == "shade") {
      this.themeService.updateTheme(this.active.name, { [variable]: `${value},${value},${value}` });
    } else {
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
    }
  }

  toggleTheming() {
    this.slidersVisibility = !this.slidersVisibility;
  }

}
