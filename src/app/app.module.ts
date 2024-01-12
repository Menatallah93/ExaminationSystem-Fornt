import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MCQuestionsComponent } from './mcquestions/mcquestions.component';
import { CompletetheblanksComponent } from './completetheblanks/completetheblanks.component';
import { TrueOrFalseQuestionsComponent } from './true-or-false-questions/true-or-false-questions.component';
import { CreateExamComponent } from './create-exam/create-exam.component';
import { ListeningQuestionComponent } from './listening-question/listening-question.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AcadmicorgeneralComponent } from './acadmicorgeneral/acadmicorgeneral.component';
import { ReadingQuestionComponent } from './reading-question/reading-question.component';
import { WritingQuestionComponent } from './writing-question/writing-question.component';
import { ExamCardsComponent } from './exam-cards/exam-cards.component';
import { ModelsComponent } from './models/models.component';
import { WritingComponent } from './writing/writing.component';
import { ReadingComponent } from './reading/reading.component';
import { AduioComponent } from './aduio/aduio.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    MCQuestionsComponent,
    CompletetheblanksComponent,
    TrueOrFalseQuestionsComponent,
    CreateExamComponent,
    ListeningQuestionComponent,
    LoginPageComponent,
    RegistrationPageComponent,
    DashboardComponent,
    AcadmicorgeneralComponent,
    ExamCardsComponent,
    ModelsComponent,
    ReadingComponent,
    AduioComponent,
    WritingComponent,
    ReadingQuestionComponent,
    WritingQuestionComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
