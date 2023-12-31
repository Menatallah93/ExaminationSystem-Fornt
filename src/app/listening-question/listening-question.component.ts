import { Component, Input, OnInit } from '@angular/core';
import { QuestionsService } from '../Services/questions.service';

@Component({
  selector: 'app-listening-question',
  templateUrl: './listening-question.component.html',
  styleUrls: ['./listening-question.component.scss']
})
export class ListeningQuestionComponent implements OnInit {
  @Input() mcQuestionsData: any;
  @Input() trueFalseQuestionsData: any;
  @Input() completeTheBlanksData: any;

  isCollapsed: boolean[] = [];
  addNewQ: any[] = []
 

  constructor(private ques: QuestionsService) { }

  ngOnInit(): void {
    this.uploadFiles();
    this.addNewQ = this.ques.questionNumber;
  }

  toggleCollapse(index: number) {
    this.isCollapsed[index] = !this.isCollapsed[index];
  }

  addQuestions() {
    const newObject = { id: this.addNewQ.length + 1, navlink: "", buttonShow: false };
    this.addNewQ = this.ques.selectedListeningQuestion(newObject);
  }

  navigate(link:string , index :any){
    console.log(index);
    const nav = this.addNewQ.find(c=>c.id == index );
    nav.navlink = link;
    nav.buttonShow = true;
  }

  private sleep = (time: number) => new Promise(resolve => setTimeout(resolve, time));

  private uploadFiles = async () => {
    const upload = document.querySelector(".upload") as HTMLElement | null;
    const uploadBtn = document.querySelector(".upload__button") as HTMLButtonElement | null;

    if (uploadBtn) {
      uploadBtn.addEventListener("click", async () => {
        if (upload) {
          upload.classList.add("uploading");
          await this.sleep(3000);
          upload.classList.add("uploaded");
          await this.sleep(2000);
          upload.classList.remove("uploading");
          upload.classList.add("uploaded-after");
          await this.sleep(1000);
          upload.className = "upload";
        }
      });
    }
  };
}