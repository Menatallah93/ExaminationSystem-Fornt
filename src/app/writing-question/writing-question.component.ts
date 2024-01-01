import { ChangeDetectorRef, Component, ElementRef, Input, OnInit } from '@angular/core';
import { QuestionsService } from '../Services/questions.service';

@Component({
  selector: 'app-writing-question',
  templateUrl: './writing-question.component.html',
  styleUrls: ['./writing-question.component.scss']
})
export class WritingQuestionComponent implements OnInit {
  isCollapsed: boolean[] = [];
  addNewQ: any[] = []

  constructor(private ques: QuestionsService) { }


  ngOnInit(): void {
    this.addNewQ = this.ques.writingQuestionNumber;
  }

  toggleCollapse(index: number) {
    this.isCollapsed[index] = !this.isCollapsed[index];
  }

  addQuestions() {
    const newObject = { id: this.addNewQ.length + 1, navlink: "", buttonShow: false };
    this.addNewQ = this.ques.selectedWritingQuestion(newObject);
  }

  navigate(link: string, index: any) {
    console.log(index);
    const nav = this.addNewQ.find(c => c.id == index);
    nav.navlink = link;
    nav.buttonShow = true;

  }

}
