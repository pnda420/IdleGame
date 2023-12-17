import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TimeService {
  private timeSubject = new Subject<string>();
  time$ = this.timeSubject.asObservable();

  private currentTime: string = "--:--:--";

  setCurrentTime(time: string) {
    this.currentTime = time;
    this.timeSubject.next(time);
  }

  getCurrentTime(): string {
    return this.currentTime;
  }
}
