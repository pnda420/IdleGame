import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CounterService } from '../service/counter.service';

@Component({
  selector: 'app-statusbar',
  templateUrl: './statusbar.component.html',
  styleUrls: ['./statusbar.component.css']
})
export class StatusbarComponent implements OnInit {

  counterValue: number = 0;
  workerEarn: number = 1;

  moneyInterval: number = 10;
  moneyDisplay: string = "";
  private subscription: Subscription;

  constructor(private counterService: CounterService) {
    this.subscription = this.counterService.counter$.subscribe((value) => {
      this.counterValue = value;
      this.updateMoneyDisplay();
    }
    );
  }

  ngOnInit() {
    setInterval(() => {
      this.counterService.increaseCounter(this.workerEarn);
      this.updateMoneyDisplay();
    }, this.moneyInterval);
  }

  updateMoneyDisplay() {
    this.moneyDisplay = this.counterValue.toString().padStart(9, '0');
  }
}




