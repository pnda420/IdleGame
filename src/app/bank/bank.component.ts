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
  course: number = 10;
  coursePositive: boolean = true;

  currentMoney: number;
  subscription: any;


  constructor(private counterService: CounterService){
    this.subscription = this.counterService.counter$.subscribe((value) => {
      this.currentMoney = value;
    })
  }
  
  ngOnInit(): void {
    setInterval(() => {
      this.updateCourse();
    }, 10000);

    setInterval(() => {
      this.updateBankMoney();
    }, 1000);
  }

   updateCourse(): void {
    this.course = this.getRandomNumber(10,30);
    this.coursePositive = this.getRandomBoolean()
  }

   getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

   getRandomBoolean(): boolean {
    return Math.random() < 0.5;
  }

  updateBankMoney(){
    if(this.bankMoney > 0){
      if(this.coursePositive){
        this.bankMoney = Math.round(this.bankMoney + (this.bankMoney * this.course / 100));
      }else{
        this.bankMoney =Math.round(this.bankMoney - (this.bankMoney * this.course / 100));
      }
    }
  }

  addMoney(){
    this.depositMoney += 100;
  }

  subMoney(){
    if(this.depositMoney > 99){
      this.depositMoney -= 100;
    }
  }

  deposit(): void {
    if(this.canAffortDeposit){
    this.counterService.decreaseCounter(this.depositMoney)
    this.bankMoney += this.depositMoney
    this.depositMoney = 0;
  }
  }


  canAffortDeposit(){
    return this.currentMoney > this.depositMoney
  }


  withdraw(): void {
    this.counterService.increaseCounter(this.bankMoney)
    this.bankMoney = 0;
  }
}