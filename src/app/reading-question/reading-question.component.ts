import { ChangeDetectorRef, Component, ElementRef, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { QuestionsService } from '../Services/questions.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-reading-question',
  templateUrl: './reading-question.component.html',
  styleUrls: ['./reading-question.component.scss']
})
export class ReadingQuestionComponent implements OnInit {
  @Input() mcQuestionsData: any;
  @Input() trueFalseQuestionsData: any;
  @Input() completeTheBlanksData: any;

  isCollapsed: boolean[] = [];
  addNewQ: any[] = []
  userEnteredTime: string = '';


  constructor(private ques: QuestionsService, private el: ElementRef, private cdr: ChangeDetectorRef) { }


  ngOnInit(): void {
    this.addNewQ = this.ques.readingQuestionNumber;
  }

  toggleCollapse(index: number) {
    this.isCollapsed[index] = !this.isCollapsed[index];
  }

  addQuestions() {
    const newObject = { id: this.addNewQ.length + 1, navlink: "", buttonShow: false };
    this.addNewQ = this.ques.selectedReadingQuestion(newObject);
  }

  navigate(link: string, index: any) {
    console.log(index);
    const nav = this.addNewQ.find(c => c.id == index);
    nav.navlink = link;
    nav.buttonShow = true;

  }

  ngAfterViewInit(): void {
    const fileInput = this.el.nativeElement.querySelector('#file');
    const uploadedImg = this.el.nativeElement.querySelector('#uploadedImg');
    const helpText = this.el.nativeElement.querySelector('#helpText');
    const previewImage = this.el.nativeElement.querySelector('#previewImage');
    const form = this.el.nativeElement.querySelector('#imageUploadForm');

    fileInput.addEventListener('change', () => {
      this.readURL(fileInput, uploadedImg, helpText, previewImage, form);
      form.classList.add('loading');
      this.cdr.detectChanges();
    });

    uploadedImg.addEventListener('animationend', () => {
      form.classList.add('loaded');
      this.cdr.detectChanges();
    });

    helpText.addEventListener('animationend', () => {
      setTimeout(() => {
        fileInput.value = '';
        form.classList.remove('loading', 'loaded');
        this.cdr.detectChanges(); 
      }, 5000);
    });
  }
  readURL(input: any, uploadedImg: any, helpText: any, previewImage: any, form: any) {
    if (input.files && input.files[0]) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        previewImage.src = e.target.result;
        //uploadedImg.style.backgroundImage = 'url(' + e.target.result + ')';
        this.cdr.detectChanges();
      };

      reader.readAsDataURL(input.files[0]);
    }
  }

}
