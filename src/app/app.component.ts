import { Component } from '@angular/core';
import { TimeService } from './service/time.service';
import { UpgradeService } from './service/upgrade.service';

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
  subscription1: any;

  bankUnlocked = false;
  workerUnlocked = false;
  subscription2: any;

  constructor(private timeService: TimeService, private upgradeService: UpgradeService) {
    this.subscription = this.timeService.time$.subscribe((value) => {
      this.currentTime = value;
      if (value != "00:00:00") {
        this.hasStarted = true;
      }
    })
    this.subscription1 = this.upgradeService.unlockBank$.subscribe((value) => {
      this.bankUnlocked = value;
    })
    this.subscription2 = this.upgradeService.unlockWorkers$.subscribe((value) => {
      this.workerUnlocked = value;
    })
  }
}
