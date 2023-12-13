import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class CounterService {
    private counterSubject = new Subject<number>();
    counter$ = this.counterSubject.asObservable();
    private currentValue = 0;

    increaseCounter(ammount: number) {
        this.currentValue+=ammount;
        this.counterSubject.next(this.currentValue);
    }

    getCurrentValue(): number {
        return this.currentValue;
    }
}
