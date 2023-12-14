import { Component } from '@angular/core';
import { CounterService } from '../service/counter.service';
import { UpgradeService } from '../service/upgrade.service';

@Component({
  selector: 'app-click-area',
  templateUrl: './click-area.component.html',
  styleUrls: ['./click-area.component.css']
})
export class ClickAreaComponent {
  subscription: any;

  constructor(private counterService: CounterService, private upgradeService: UpgradeService) { 
    this.subscription = this.upgradeService.buttonValue$.subscribe((value) => {
      this.clickAmmount = value;
    }
    );
  }

  clickAmmount: number;

  onButtonClick(): void {
    this.counterService.increaseCounter(this.clickAmmount);
    
  }
}
