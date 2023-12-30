import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-true-or-false-questions',
  templateUrl: './true-or-false-questions.component.html',
  styleUrls: ['./true-or-false-questions.component.scss']
})
export class TrueOrFalseQuestionsComponent {
  selectedOption: string = 'false'; // You can initialize it with a default value

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngAfterViewInit() {
    const radios = this.el.nativeElement.querySelectorAll('input[type="radio"]');
    
    radios.forEach((radio: any) => {
      this.renderer.listen(radio, 'click', () => {
        console.log(radio.value)
        // Do something on click
      });
    });
  }
}
