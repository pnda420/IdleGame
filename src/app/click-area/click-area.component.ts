import { Component, OnInit } from '@angular/core';
import { CounterService } from '../service/counter.service';
import { UpgradeService } from '../service/upgrade.service';

@Component({
  selector: 'app-click-area',
  templateUrl: './click-area.component.html',
  styleUrls: ['./click-area.component.css']
})
export class ClickAreaComponent implements OnInit {
  subscription: any;

  constructor(private counterService: CounterService, private upgradeService: UpgradeService) { 
    this.subscription = this.upgradeService.buttonValue$.subscribe((value) => {
      this.clickAmmount = value;
    }
    );
  }
  ngOnInit(): void {
    this.counterService.increaseCounter(0);
  }

  clickAmmount: number;

  onButtonClick(): void {
    this.counterService.increaseCounter(this.clickAmmount);
    
  }
}
