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

  moneyDisplay: string = "0000000";
  private subscription: Subscription;

  constructor(private counterService: CounterService) {
    this.subscription = this.counterService.counter$.subscribe((value) => {
      this.counterValue = value;
      this.updateMoneyDisplay();
    }
    );
  }

  ngOnInit() {
  
    //this.counterService.increaseCounter(this.workerEarn);

  }

  updateMoneyDisplay() {
    this.moneyDisplay = this.counterValue.toString().padStart(7, '0');
  }
}




