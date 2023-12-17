import { Component, OnInit } from '@angular/core';
import { CounterService } from '../service/counter.service';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {

  bankMoney: number = 0;
  depositMoney: number = 0;
  course: number = 2;
  coursePositive: boolean = false;

  currentMoney: number;
  subscription: any;

  bankInterval: number = 10000;

  remainingTimetoCourseChange: number = 0


  constructor(private counterService: CounterService) {
    this.subscription = this.counterService.counter$.subscribe((value) => {
      this.currentMoney = value;
    })
  }

  ngOnInit(): void {
    this.startCountdown(100);
    setInterval(() => {
      this.startCountdown(100);
      this.updateCourse();

    }, 20000);
  
    setInterval(() => {
      this.updateBankMoney();
    }, 1000);
  }
  
  startCountdown(duration) {
    let elapsedTime = 0;
    const countdownInterval = setInterval(() => {
      elapsedTime+=0.5;
      this.remainingTimetoCourseChange = elapsedTime;
  
      if (elapsedTime === duration) {
        clearInterval(countdownInterval);
      }
    }, 100);
  }
  
  

  updateCourse(): void {
    this.course = this.getRandomNumber(1, 5);
    this.coursePositive = this.getRandomBoolean()
  }

  getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getRandomBoolean(): boolean {
    return Math.random() < 0.5;
  }

  updateBankMoney() {
    if (this.bankMoney > 0) {
      if (this.coursePositive) {
        this.bankMoney = Math.round(this.bankMoney + (this.bankMoney * this.course / 100));
      } else {
        this.bankMoney = Math.round(this.bankMoney - (this.bankMoney * this.course / 100));
      }
    }
  }

  addMoney() {
    this.depositMoney += 1000;
  }

  subMoney() {
    if (this.depositMoney > 999) {
      this.depositMoney -= 1000;
    }
  }

  private changeMoneyInterval: any;


  startIncreasingMoney() {
    this.changeMoneyInterval = setInterval(() => {
      this.addMoney();
    }, 50);
  }


  startDecreasingMoney() {
    this.changeMoneyInterval = setInterval(() => {
      this.subMoney();
    }, 50);
  }


  stopChangingMoney() {
    clearInterval(this.changeMoneyInterval);
  }

  deposit(): void {
    if (this.canAffortDeposit) {
      this.counterService.decreaseCounter(this.depositMoney)
      this.bankMoney += this.depositMoney
    }
  }


  canAffortDeposit() {
    return this.currentMoney >= this.depositMoney
  }


  withdraw(): void {
    this.counterService.increaseCounter(this.bankMoney)
    this.bankMoney = 0;
  }
}