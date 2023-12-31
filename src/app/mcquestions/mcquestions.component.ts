import { Component, Input } from '@angular/core';
import { QuestionsService } from '../Services/questions.service';

@Component({
  selector: 'app-mcquestions',
  templateUrl: './mcquestions.component.html',
  styleUrls: ['./mcquestions.component.scss']
})
export class MCQuestionsComponent {
  @Input() mcQuestionsData: any;
  textareas: string[] = [];
  answers: string[] = [];

  constructor(private ques:QuestionsService){

  }
  addTAnswers() {
    this.answers.push('');
  }
  addTextarea() {
    this.textareas.push('');
  }
  removeTextarea(index: number) {
    if (index >= 0 && index < this.textareas.length) {
      console.log(index);
  
      this.textareas.forEach((item, i) => {
        if (i === index) {
          this.textareas.splice(i, 1);
        }
      });
    }
  }

  back() {  
    const foundQuestion = this.ques.questionNumber.find(qu => qu.id === this.mcQuestionsData.id);
    const foundReadingQuestion = this.ques.readingQuestionNumber.find(qu => qu.id === this.mcQuestionsData.id);

    if (foundQuestion) {
      foundQuestion.buttonShow = false;
      foundQuestion.navlink = "";
    }
    else if(foundReadingQuestion) {
      foundReadingQuestion.buttonShow = false;
      foundReadingQuestion.navlink = "";
    } 
  }
  
}
