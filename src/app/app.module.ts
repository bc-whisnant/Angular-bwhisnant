import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderSectionComponent } from './header-section/header-section.component';
import { MiddleSectionComponent } from './middle-section/middle-section.component';
import { BottomSectionComponent } from './bottom-section/bottom-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderSectionComponent,
    MiddleSectionComponent,
    BottomSectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
