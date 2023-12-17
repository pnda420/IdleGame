import { Component, OnInit } from '@angular/core';
import { CounterService } from '../service/counter.service';
import { UpgradeService } from '../service/upgrade.service';
import * as faker from 'faker';

interface Worker {
  name: string;
  level: number;
}
@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css']
})

export class WorkerComponent implements OnInit {
  subscription: any;
  workers = [];
  maxWorker: number;
  money: number;
  totalMoneyPerTick: number;
  moneyInterval: number = 1000;
  subscription1: any;
  subscription2: any;

  constructor(private counterService: CounterService, private updateService: UpgradeService) {
    this.subscription = this.counterService.counter$.subscribe((value) => {
      this.money = value;
    }
    );
    this.subscription1 = this.updateService.interval$.subscribe((value) => {
      this.moneyInterval = value
    }
    );
    this.subscription2 = this.updateService.maxWorker$.subscribe((value) => {
      this.maxWorker = value
      console.log("new WORKER");
      
    }
    );
    
  }

  ngOnInit() {
    this.updateMoney();
  }

  updateMoney(): void {
    let allLevels: number = 0;

    for (let i = 0; i < this.workers.length; i++) {
      allLevels += this.getWorkerTickValue(this.workers[i].level);
    }

    this.totalMoneyPerTick = allLevels;
    this.counterService.increaseCounter(this.totalMoneyPerTick);

    setTimeout(() => {
      this.updateMoney();
    }, this.moneyInterval);
  }

  getWorkerBuyLabel() {
    if (this.workers.length >= this.maxWorker) {
      return "max. Workers"
    } else {
      return "add " + this.getAddWorkerPrice()
    }
  }

  changeMoneyInterval(newInterval: number): void {
    this.moneyInterval = newInterval;
  }

  getRandomName(): string {
    const randomName = faker.name.firstName();
    return randomName;
  }

  //MONEY
  getPriceUpgrade(level: number): number {
    return (level * 10) ** 2
  }

  canAffort(level: number): boolean {
    return this.money >= this.getPriceUpgrade(level);
  }

  //WORKER
  addWorker() {
    this.counterService.decreaseCounter(this.getAddWorkerPrice())
    let worker: Worker = {
      name: this.getRandomName(),
      level: 1
    }
    this.workers.push(worker);
  }

  getAddWorkerPrice() {
    if (this.workers.length === 0) {
      return 100
    } else {
      return (this.workers.length * 50) ** 2;
    }

  }

  canAffortBuyWorker(): boolean {
    let canAffort;
    if(this.money >= this.getAddWorkerPrice() && this.workers.length < this.maxWorker){
      canAffort = true;
    }else{
      canAffort = false;
    }
    return canAffort
  }

  upgradeWorker(worker: Worker) {
    this.counterService.decreaseCounter(this.getPriceUpgrade(worker.level));
    const workerindex = this.workers.indexOf(worker);
    let updatedWorker: Worker = {
      name: worker.name,
      level: worker.level + 1
    }
    this.workers[workerindex] = updatedWorker;
  }


  getWorkerTickValue(level: number): number {
    return (level * 2) ** 2
  }

}
