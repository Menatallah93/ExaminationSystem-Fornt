import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CompletetheblanksComponent } from './completetheblanks/completetheblanks.component';
import { TrueOrFalseQuestionsComponent } from './true-or-false-questions/true-or-false-questions.component';
import { MCQuestionsComponent } from './mcquestions/mcquestions.component';

const routes: Routes = [
  {path: '' , redirectTo:'landing' , pathMatch:'full'},
{path: 'landing',component:LandingPageComponent},
{path: 'complete',component:CompletetheblanksComponent},

{path: 'selectanswer',component:TrueOrFalseQuestionsComponent},
{path: 'mcqquestion',component:MCQuestionsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
