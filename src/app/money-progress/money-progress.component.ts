import { Component } from '@angular/core';
import { CounterService } from '../service/counter.service';

@Component({
  selector: 'app-money-progress',
  templateUrl: './money-progress.component.html',
  styleUrls: ['./money-progress.component.css']
})
export class MoneyProgressComponent {
  subscription: any;
  counterValue1m: number;
  counterValue100m: number;

  constructor(private counterService: CounterService) {
    this.subscription = this.counterService.counter$.subscribe((value) => {
      this.berechneProzentsatz1m(value)
      this.berechneProzentsatz100m(value)
    }
    );
  }

  berechneProzentsatz1m(wert: number) {
    let value: number = parseFloat((wert / 1000000 * 100).toFixed(2));
    this.counterValue1m = value;
  }
  berechneProzentsatz100m(wert: number) {
    let value: number = parseFloat((wert / 100000000 * 100).toFixed(2));
    this.counterValue100m = value;
  }
}
