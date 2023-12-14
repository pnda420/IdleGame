import { Component } from '@angular/core';
import { CounterService } from '../service/counter.service';

@Component({
  selector: 'app-money-progress',
  templateUrl: './money-progress.component.html',
  styleUrls: ['./money-progress.component.css']
})
export class MoneyProgressComponent {
  subscription: any;
  counterValue: number;

  constructor(private counterService: CounterService) {
    this.subscription = this.counterService.counter$.subscribe((value) => {
      this.berechneProzentsatz(value)
    }
    );
  }

  berechneProzentsatz(wert: number){
    this.counterValue = Math.round((wert / 1000000) * 100);
  }
  
}
