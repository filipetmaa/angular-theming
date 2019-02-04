import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormatVariablePipe } from './shared/pipes/format-variable.pipe'
import { ThemeModule, lightTheme, darkTheme, clientTheme, clientDarkTheme, pantoneColors } from './theme';
import { PureMaterialModule } from './components/pure-material/pure-material.module';
import { ShowcaseTitleComponent } from './components/showcase-title/showcase-title.component';
import { SharedModule } from './shared/shared.module';

declare var require: any;

@NgModule({
  imports: [
    BrowserModule,
    PureMaterialModule,
    SharedModule,
    ThemeModule.forRoot({
      themes: [lightTheme, darkTheme, clientTheme, clientDarkTheme, pantoneColors],
      active: 'pantone-colors' //light, dark, client, client-dark, pantone-colors
    })
  ],
  declarations: [
    AppComponent,
    FormatVariablePipe,
    ShowcaseTitleComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
