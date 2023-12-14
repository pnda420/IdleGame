// upgrade.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class UpgradeService {
    private intervalSubject = new Subject<number>();
    private buttonValueSubject = new Subject<number>();

    interval$ = this.intervalSubject.asObservable();
    buttonValue$ = this.buttonValueSubject.asObservable();

    private interval = 500;
    private buttonValue = 0;

    setInterval(ammount: number) {
        this.interval = ammount;
        this.intervalSubject.next(this.interval);
    }

    setButtonValue(value: number) {
        this.buttonValue = value;
        this.buttonValueSubject.next(this.buttonValue);
    }

    getCurrentInterval(): number {
        return this.interval;
    }

    getCurrentButtonValue(): number {
        return this.buttonValue;
    }
}
