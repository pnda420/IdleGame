import { Component, OnInit } from '@angular/core';
import { UpgradeService } from '../service/upgrade.service';

@Component({
  selector: 'app-upgradelist',
  templateUrl: './upgradelist.component.html',
  styleUrls: ['./upgradelist.component.css']
})
export class UpgradelistComponent implements OnInit {

  intervalValue: number = 1000;
  buttonValue: number = 100;
  constructor(private upgradeService: UpgradeService) { };

  ngOnInit(): void {
    this.upgradeService.setInterval(this.intervalValue);
    this.upgradeService.setButtonValue(this.buttonValue);
  }

  buyButton(): void {
    this.buttonValue += 100;
    this.upgradeService.setButtonValue(this.buttonValue);

  }

  buyInterval(): void {
    this.intervalValue -= 100;
    this.upgradeService.setInterval(this.intervalValue);
  }

}
