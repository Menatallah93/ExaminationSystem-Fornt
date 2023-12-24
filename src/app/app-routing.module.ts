import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CreateExamComponent } from './create-exam/create-exam.component';
import { ListeningQuestionComponent } from './listening-question/listening-question.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';


const routes: Routes = [
  {path: '' , redirectTo:'landing' , pathMatch:'full'},
  {path: 'landing',component:LandingPageComponent},
  {path: 'create' , component:CreateExamComponent},
  {path: 'listen' , component:ListeningQuestionComponent}
  {path: 'login',component: LoginPageComponent},
  {path: 'Registeration',component: RegistrationPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
