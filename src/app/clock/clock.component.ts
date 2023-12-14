import { Component } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent {
  private intervalId: any;
  private milliseconds: number = 0;
  private seconds: number = 0;
  private minutes: number = 0;
  public isRunning: boolean = false;

  ngOnDestroy(): void {
    this.stopTimer();
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
      }, 10);
    }
  }

  stopTimer(): void {
    if (this.isRunning) {
      clearInterval(this.intervalId);
      this.isRunning = false;
      this.milliseconds = 0;
      this.seconds = 0;
      this.minutes = 0;
    }
  }

  formatTime(): string {
    return `${this.formatTimeComponent(this.minutes)}:${this.formatTimeComponent(this.seconds)}:${this.formatTimeComponent(Math.floor(this.milliseconds / 100))}`;
  }

  private formatTimeComponent(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }
}