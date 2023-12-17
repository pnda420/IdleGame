import { Component, OnInit } from '@angular/core';
import { TimeService } from '../service/time.service';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  subscription: any;

  
  private intervalId: any;
  private milliseconds: number = 0;
  private seconds: number = 0;
  private minutes: number = 0;
  public isRunning: boolean = false;
  
  constructor(private TimeService: TimeService) {}

  ngOnInit(): void {
  }
  
  startTimer(): void {
    if (!this.isRunning) {
      this.isRunning = true;
      this.intervalId = setInterval(() => {
        this.milliseconds += 10;
        if (this.milliseconds === 1000) {
          this.milliseconds = 0;
          this.seconds++;
        }
        if (this.seconds === 60) {
          this.seconds = 0;
          this.minutes++;
        }
        this.TimeService.setCurrentTime(this.formatTime());
      }, 10);
    
    }
  }

  stopTimer(): void {
    if (this.isRunning) {
      clearInterval(this.intervalId);
      this.isRunning = false;
    }
  }

  pauseTimer(): void {
    if (this.isRunning) {
      clearInterval(this.intervalId);
      this.isRunning = false;
    }
  }

  formatTime(): string {
    let time = `${this.formatTimeComponent(this.minutes)}:${this.formatTimeComponent(this.seconds)}:${this.formatTimeComponent(Math.floor(this.milliseconds / 100))}`
    return time;
  }

  private formatTimeComponent(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }
}
