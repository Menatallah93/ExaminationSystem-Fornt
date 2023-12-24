import { Component } from '@angular/core';

@Component({
  selector: 'app-create-exam',
  templateUrl: './create-exam.component.html',
  styleUrls: ['./create-exam.component.scss']
})
export class CreateExamComponent {
  navlink:string = "listen"
  examTitle = 'Exam No. 1';
  editMode = false;

  toggleEditMode() {
    this.editMode = !this.editMode;
  }


  navigate(link:string){
    this.navlink = link ;
  }
}
