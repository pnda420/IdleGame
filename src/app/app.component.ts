import { Component } from '@angular/core';
import { TimeService } from './service/time.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IdleGame';
  subscription: any;
  currentTime: any;

  hasStarted: boolean = false;

  constructor(private timeService: TimeService) {
    this.subscription = this.timeService.time$.subscribe((value) => {
      this.currentTime = value;
      if (value != "00:00:00") {
        this.hasStarted = true;
      }
    })
  }
}
