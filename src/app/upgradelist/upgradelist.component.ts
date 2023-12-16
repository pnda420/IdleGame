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
  buttonValue: number = 100;

  buttonPrice: number = 100;
  intervalPrice: number = 100;
  subscription: any;

  playerMoney: number;

  constructor(private upgradeService: UpgradeService, private counterService: CounterService) {
    this.subscription = this.counterService.counter$.subscribe((value) => {
      this.playerMoney = value;
    }
    );
  };

  ngOnInit(): void {
    this.upgradeService.setInterval(this.intervalValue);
    this.upgradeService.setButtonValue(this.buttonValue);
  }

  buyButton(): void {
    if (this.canAffort("button")) {
      this.buttonValue += 100;
      this.upgradeService.setButtonValue(this.buttonValue);
      this.counterService.decreaseCounter(this.buttonPrice);
      this.buttonPrice = Math.round(this.buttonPrice * 2);
    }
  }

  buyInterval(): void {
    if (this.canAffort("interval")) {
      this.intervalValue -= 100;
      this.upgradeService.setInterval(this.intervalValue);
      this.counterService.decreaseCounter(this.intervalPrice);
      this.intervalPrice = Math.round(this.intervalPrice * 2.5);
    }
  }

  canAffort(type: string): boolean {
    let canAffort;

    if (type == "button") {
      if (this.playerMoney >= this.buttonPrice) {
        canAffort = true
      }
    }
    else if (type == "interval") {
      if (this.playerMoney >= this.intervalPrice) {
        canAffort = true
      }
    }
    else {
      canAffort = false;
    }

    return canAffort;

  }

}
