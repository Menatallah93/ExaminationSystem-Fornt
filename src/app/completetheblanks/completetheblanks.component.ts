import { Component } from '@angular/core';

@Component({
  selector: 'app-completetheblanks',
  templateUrl: './completetheblanks.component.html',
  styleUrls: ['./completetheblanks.component.scss']
})
export class CompletetheblanksComponent {
  textareas: string[] = [];

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
