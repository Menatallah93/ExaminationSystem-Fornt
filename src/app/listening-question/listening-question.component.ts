import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listening-question',
  templateUrl: './listening-question.component.html',
  styleUrls: ['./listening-question.component.scss']
})
export class ListeningQuestionComponent implements OnInit {
  isCollapsed: boolean[] = [];
  addQuestion: number[]=[];

  constructor() { }

  ngOnInit(): void {
    this.uploadFiles();
  }

  toggleCollapse(index: number) {
    this.isCollapsed[index] = !this.isCollapsed[index];
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

  addQuestions(){
    this.addQuestion.push(1);
  }
}