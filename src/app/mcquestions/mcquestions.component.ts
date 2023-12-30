import { Component } from '@angular/core';

@Component({
  selector: 'app-mcquestions',
  templateUrl: './mcquestions.component.html',
  styleUrls: ['./mcquestions.component.scss']
})
export class MCQuestionsComponent {
  textareas: string[] = [];
  answers: string[] = [];

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
  
}
