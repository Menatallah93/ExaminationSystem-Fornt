import { Component, Input } from '@angular/core';
import { QuestionsService } from '../Services/questions.service';

@Component({
  selector: 'app-completetheblanks',
  templateUrl: './completetheblanks.component.html',
  styleUrls: ['./completetheblanks.component.scss']
})
export class CompletetheblanksComponent {
  @Input() completeTheBlanksData: any;
  textareas: string[] = [];

  constructor(private ques:QuestionsService){}

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
    const foundQuestion = this.ques.questionNumber.find(qu => qu.id === this.completeTheBlanksData.id);
    const foundReadingQuestion = this.ques.readingQuestionNumber.find(qu => qu.id === this.completeTheBlanksData.id);
  
    if (foundQuestion) {
      foundQuestion.buttonShow = false;
      foundQuestion.navlink = "";
    }
    else if (foundReadingQuestion){
      foundReadingQuestion.buttonShow = false;
      foundReadingQuestion.navlink = "";
    }
  }
 
}
