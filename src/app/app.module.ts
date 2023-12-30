import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MCQuestionsComponent } from './mcquestions/mcquestions.component';
import { CompletetheblanksComponent } from './completetheblanks/completetheblanks.component';
import { TrueOrFalseQuestionsComponent } from './true-or-false-questions/true-or-false-questions.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    MCQuestionsComponent,
    CompletetheblanksComponent,
    TrueOrFalseQuestionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
