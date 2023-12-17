import { Component } from '@angular/core';
import { TimeService } from '../service/time.service';
import { CounterService } from '../service/counter.service';

@Component({
  selector: 'app-money-goals',
  templateUrl: './money-goals.component.html',
  styleUrls: ['./money-goals.component.css']
})
export class MoneyGoalsComponent {
  subscription: any;

  currentTime: string;
  currentMoney: number;
  subscription1: any;

  emptyTime: string = "--:--:--"

  goalTime10k: string = this.emptyTime
  goalTime100k: string = this.emptyTime
  goalTime1m: string = this.emptyTime
  goalTime10m: string = this.emptyTime
  goalTime100m: string = this.emptyTime

  hasTime10k:boolean = false
  hasTime100k:boolean = false
  hasTime1m:boolean = false
  hasTime10m:boolean = false
  hasTime100m:boolean = false

  constructor(private TimeService: TimeService, private counterService: CounterService) {
    this.subscription = this.TimeService.time$.subscribe((value) => {
      this.currentTime = value;
    }
    );

    this.subscription1 = this.counterService.counter$.subscribe((value) => {
      this.currentMoney = value;

      if(this.goalTime10k == this.emptyTime && this.currentMoney >= 10000){
        this.hasTime10k = true;
        this.goalTime10k = this.currentTime;
      }
      if(this.goalTime100k == this.emptyTime && this.currentMoney >= 100000){
        this.hasTime100k = true;
        this.goalTime100k = this.currentTime;
      }
      if(this.goalTime1m == this.emptyTime && this.currentMoney >= 1000000){
        this.hasTime1m = true;
        this.goalTime1m = this.currentTime;
      }
      if(this.goalTime10m == this.emptyTime && this.currentMoney >= 10000000){
        this.hasTime10m = true;
        this.goalTime10m = this.currentTime;
      }
      if(this.goalTime100m == this.emptyTime && this.currentMoney >= 100000000){
        this.hasTime100m = true;
        this.goalTime100m= this.currentTime;
      }
    }
    );
  }


}
