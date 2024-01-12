import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-writing',
  templateUrl: './writing.component.html',
  styleUrls: ['./writing.component.scss']
})
export class WritingComponent implements OnInit {
  creativeTime: string = '';
  endTime!: Date ;
  
  ngOnInit(): void {
    const examDurationInMinutes = 30;
    
    this.endTime = new Date();
    this.endTime.setMinutes(this.endTime.getMinutes() + examDurationInMinutes);

    this.updateTime();

    setInterval(() => this.updateTime(), 1000);
  }

  updateTime(): void {
    const currentTime = new Date();
    const timeDifference = this.endTime.getTime() - currentTime.getTime();

    if (timeDifference > 0) {
      const remainingMinutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const remainingSeconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      this.creativeTime = `${remainingMinutes}:${remainingSeconds}`;
    } else {
      this.creativeTime = "Time's up!";
    }
  }

}
