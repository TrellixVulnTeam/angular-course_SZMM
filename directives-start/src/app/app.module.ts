import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BasicHiglightDirective } from './basic-higlight/basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';


@NgModule({
  declarations: [
    AppComponent,
    BasicHiglightDirective,
    BetterHighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }