import { Component, ElementRef, Input, Renderer2 } from '@angular/core';
import { QuestionsService } from '../Services/questions.service';

@Component({
  selector: 'app-true-or-false-questions',
  templateUrl: './true-or-false-questions.component.html',
  styleUrls: ['./true-or-false-questions.component.scss']
})
export class TrueOrFalseQuestionsComponent {
  @Input() trueFalseQuestionsData: any;
  selectedOption: string = 'false'; // You can initialize it with a default value

  constructor(private renderer: Renderer2, private el: ElementRef , private ques:QuestionsService) {}

  ngAfterViewInit() {
    const radios = this.el.nativeElement.querySelectorAll('input[type="radio"]');
    
    radios.forEach((radio: any) => {
      this.renderer.listen(radio, 'click', () => {
        console.log(radio.value)
        // Do something on click
      });
    });
  }

  back() {  
    const foundQuestion = this.ques.questionNumber.find(qu => qu.id === this.trueFalseQuestionsData.id);
    const foundReadingQuestion = this.ques.readingQuestionNumber.find(qu => qu.id === this.trueFalseQuestionsData.id);
  
    if (foundQuestion) {
      foundQuestion.buttonShow = false;
      foundQuestion.navlink = "";
    } 
    else if(foundReadingQuestion){
      foundReadingQuestion.buttonShow = false;
      foundReadingQuestion.navlink = "";
    }
  }
}
