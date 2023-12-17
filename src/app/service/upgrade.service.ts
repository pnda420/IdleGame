// upgrade.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class UpgradeService {
    private intervalSubject = new Subject<number>();
    private buttonValueSubject = new Subject<number>();
    private maxWorkerSubject = new Subject<number>();
    private unlockBankSubject = new Subject<boolean>();
    private unlockWorkersSubject = new Subject<boolean>();

    interval$ = this.intervalSubject.asObservable();
    buttonValue$ = this.buttonValueSubject.asObservable();
    maxWorker$ = this.maxWorkerSubject.asObservable();
    unlockBank$ = this.unlockBankSubject.asObservable();
    unlockWorkers$ = this.unlockWorkersSubject.asObservable();

    private interval = 1000;
    private buttonValue = 0;
    private maxWorker = 5;
    private unlockBank = false;
    private unlockWorkers = false;

    setInterval(ammount: number) {
        this.interval = ammount;
        this.intervalSubject.next(this.interval);
    }

    setButtonValue(value: number) {
        this.buttonValue = value;
        this.buttonValueSubject.next(this.buttonValue);
    }

    setMaxWorker(value: number) {
        this.maxWorker = value;
        this.maxWorkerSubject.next(this.maxWorker);
    }

    setUnlockBank(value: boolean){
        this.unlockBank = value;
        this.unlockBankSubject.next(this.unlockBank);
    }
    setUnlockWorkers(value: boolean){
        this.unlockWorkers = value;
        this.unlockWorkersSubject.next(this.unlockWorkers);
    }




    getCurrentInterval(): number {
        return this.interval;
    }

    getCurrentButtonValue(): number {
        return this.buttonValue;
    }
    getCurrentMaxWorker(): number {
        return this.maxWorker;
    }


}
