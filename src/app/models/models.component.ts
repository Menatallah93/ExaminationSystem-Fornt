import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.scss']
})
export class ModelsComponent {
  constructor(private router: Router) { }
  
  onEnterClick() {
    this.router.navigate(['/cards']);
  }
}
