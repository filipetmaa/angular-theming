import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormatVariablePipe } from './shared/pipes/format-variable.pipe'
import { ThemeModule, lightTheme, darkTheme, clientTheme, clientDarkTheme } from './theme';
import { PureMaterialModule } from './components/pure-material/pure-material.module';

declare var require: any;

@NgModule({
  imports: [
    BrowserModule,
    PureMaterialModule,
    ThemeModule.forRoot({
      themes: [lightTheme, darkTheme, clientTheme, clientDarkTheme],
      active: 'client-dark'
    })
  ],
  declarations: [
    AppComponent,
    FormatVariablePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
