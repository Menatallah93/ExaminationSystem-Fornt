import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CompletetheblanksComponent } from './completetheblanks/completetheblanks.component';
import { TrueOrFalseQuestionsComponent } from './true-or-false-questions/true-or-false-questions.component';
import { MCQuestionsComponent } from './mcquestions/mcquestions.component';


import { CreateExamComponent } from './create-exam/create-exam.component';
import { ListeningQuestionComponent } from './listening-question/listening-question.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { WritingComponent } from './writing/writing.component';
import { AduioComponent } from './aduio/aduio.component';
import { ExamCardsComponent } from './exam-cards/exam-cards.component';
import { ModelsComponent } from './models/models.component';
import { ReadingComponent } from './reading/reading.component';
import { AcadmicorgeneralComponent } from './acadmicorgeneral/acadmicorgeneral.component';


const routes: Routes = [
  {path: '' , redirectTo:'landing' , pathMatch:'full'},
  {path: 'landing',component:LandingPageComponent},
  {path: 'create' , component:CreateExamComponent},
  {path: 'listen' , component:ListeningQuestionComponent},
  {path: 'login',component: LoginPageComponent},
  {path: 'Registeration',component: RegistrationPageComponent},
  {path:'reading',component:ReadingComponent},
  {path:'audio', component:AduioComponent},
  {path:'writing',component:WritingComponent},
  {path:'exam',component:ModelsComponent},
  {path:'cards',component:ExamCardsComponent},
  {path:'acadmic',component:AcadmicorgeneralComponent},

{path: 'complete',component:CompletetheblanksComponent},

{path: 'selectanswer',component:TrueOrFalseQuestionsComponent},
{path: 'mcqquestion',component:MCQuestionsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
