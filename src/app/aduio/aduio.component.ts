import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aduio',
  templateUrl: './aduio.component.html',
  styleUrls: ['./aduio.component.scss']
})
export class AduioComponent implements OnInit {
  creativeTime: string = '';
  endTime!: Date;

  ngOnInit(): void {
    // Set the duration of the exam (e.g., 30 minutes)
    const examDurationInMinutes = 30;
    
    // Calculate the end time
    this.endTime = new Date();
    this.endTime.setMinutes(this.endTime.getMinutes() + examDurationInMinutes);

    // Initial update
    this.updateTime();

    // Update the time every second
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
