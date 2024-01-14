import { Component, Input } from '@angular/core';
import { QuestionsService } from '../Services/questions.service';

@Component({
  selector: 'app-completetheblanks',
  templateUrl: './completetheblanks.component.html',
  styleUrls: ['./completetheblanks.component.scss']
})
export class CompletetheblanksComponent {
  @Input() completeTheBlanksData: any;
  rows: any[] = [];
  currentNumber: number = 1;
  
  constructor(private ques: QuestionsService) {}
  
  addRow() {
    const newRow = {};
    this.rows.push(newRow);
    this.updateNumbers();
  }
  
  removeRow(index: number) {
    this.rows.splice(index, 1);
    this.updateNumbers();
  }
  
  private updateNumbers() {
    this.rows.forEach((row, index) => {
      row.number = index + 1;
    });
  
    if (this.rows.length === 0) {
      this.currentNumber = 1;
    } else {
      const lastRow = this.rows[this.rows.length - 1];
      this.currentNumber = lastRow.number + 1;
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
