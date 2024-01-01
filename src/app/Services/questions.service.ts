import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
questionNumber:any[]=[];
readingQuestionNumber:any[]=[];
writingQuestionNumber:any[]=[];

  constructor() { }
  
  selectedListeningQuestion(question:any) : any
  {
    this.questionNumber.push(question);
    console.log(this.questionNumber)
    return this.questionNumber;
  }
  
  selectedReadingQuestion(readingquestion:any) : any
  {
    this.readingQuestionNumber.push(readingquestion);
    console.log(this.readingQuestionNumber)
    return this.readingQuestionNumber;
  }

  selectedWritingQuestion(writingQuestion:any) : any
  {
    this.writingQuestionNumber.push(writingQuestion);
    console.log(this.writingQuestionNumber)
    return this.writingQuestionNumber;
  }
}
