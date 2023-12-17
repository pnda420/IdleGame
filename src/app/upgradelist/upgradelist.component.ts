import { Component, OnInit } from '@angular/core';
import { UpgradeService } from '../service/upgrade.service';
import { CounterService } from '../service/counter.service';

@Component({
  selector: 'app-upgradelist',
  templateUrl: './upgradelist.component.html',
  styleUrls: ['./upgradelist.component.css']
})
export class UpgradelistComponent implements OnInit {

  intervalValue: number = 1000;
  buttonValue: number = 50;

  buttonPrice: number = 100;
  intervalPrice: number = 100;
  subscription: any;

  maxWorkers: number = 3;
  buyMaxWorkerPrice: number = 100;

  currentMoney: number;

  constructor(private upgradeService: UpgradeService, private counterService: CounterService) {
    this.subscription = this.counterService.counter$.subscribe((value) => {
      this.currentMoney = value;
    }
    );
  };

  ngOnInit(): void {
    this.upgradeService.setInterval(this.intervalValue);
    this.upgradeService.setButtonValue(this.buttonValue);
    this.upgradeService.setMaxWorker(this.maxWorkers);
  }

  buyButton(): void {
    if (this.canAffort("button")) {
      this.buttonValue += 100
      this.upgradeService.setButtonValue(this.buttonValue);
      this.counterService.decreaseCounter(this.buttonPrice);
      this.buttonPrice = Math.round(this.buttonPrice * 2);
    }
  }

  buyInterval(): void {
    if (this.canAffort("interval")) {
      this.intervalValue -= 50;
      this.upgradeService.setInterval(this.intervalValue);
      this.counterService.decreaseCounter(this.intervalPrice);
      this.intervalPrice = Math.round(this.intervalPrice * 1.68);
    }
  }

  buyMaxWorker(): void {
    if (this.canAffort("maxWorker")) {
      this.maxWorkers += 1;
      this.upgradeService.setMaxWorker(this.maxWorkers);
      this.counterService.decreaseCounter(this.buyMaxWorkerPrice);
      this.buyMaxWorkerPrice = Math.round(this.buyMaxWorkerPrice * 5);
    }
  }

  canAffort(type: string): boolean {
    let canAffort;

    if (type == "button") {
      if (this.currentMoney >= this.buttonPrice) {
        canAffort = true
      }
    }
    else if (type == "interval") {
      if (this.currentMoney >= this.intervalPrice && this.intervalValue > 100) {
        canAffort = true
      }
    }
    else if (type == "maxWorker") {
      if (this.currentMoney >= this.buyMaxWorkerPrice) {
        canAffort = true
      }
    }
    else {
      canAffort = false;
    }

    return canAffort;

  }

}
