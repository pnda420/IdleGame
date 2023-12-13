import { Component } from '@angular/core';
import { CounterService } from '../service/counter.service';


interface Worker {
  name: string;
  level: number;
}
@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css']
})



export class WorkerComponent {
  subscription: any;
  workers = []
  money: number;

  constructor(private counterService: CounterService) {
    this.subscription = this.counterService.counter$.subscribe((value) => {
      this.money = value;
    }
    );
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
      name: 'Worker#' + this.workers.length.toString(),
      level: 1
    }
    this.workers.push(worker);
  }

  getAddWorkerPrice() {
    return (this.workers.length * 50) ** 2;
  }

  canAffortBuyWorker(): boolean {
    return this.money >= this.getAddWorkerPrice();;
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

}
