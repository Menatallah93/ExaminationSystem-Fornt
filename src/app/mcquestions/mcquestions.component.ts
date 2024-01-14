import { Component, Input } from '@angular/core';
import { QuestionsService } from '../Services/questions.service';

@Component({
  selector: 'app-mcquestions',
  templateUrl: './mcquestions.component.html',
  styleUrls: ['./mcquestions.component.scss']
})
export class MCQuestionsComponent {
  @Input() mcQuestionsData: any;
  rows: any[] = [];
  answerRows: any[] = [];

  currentLetter: string = 'A';
  answers: string[] = [];

  constructor(private ques:QuestionsService){

  }
  addAnswers() {
    const newRow = { value: '' };
    this.answerRows.push(newRow);
  }

  removeAnswers(index: number) {
      this.answerRows.splice(index, 1);
  }


  addRow() {
    const newRow = {
      letter: this.currentLetter
    };
    this.rows.push(newRow);
    this.updateCurrentLetter();
  }

  removeRow(index: number) {
    this.rows.splice(index, 1);
    this.updateCurrentLetter();
  }

  private updateCurrentLetter() {
    this.rows.forEach((row, index) => {
      row.letter = String.fromCharCode('A'.charCodeAt(0) + index);
    });

    if (this.rows.length === 0) {
      this.currentLetter = 'A';
    } else {
      const lastLetter = this.rows[this.rows.length - 1].letter;
      const nextCharCode = lastLetter.charCodeAt(0) + 1;
      this.currentLetter = String.fromCharCode(nextCharCode);
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
