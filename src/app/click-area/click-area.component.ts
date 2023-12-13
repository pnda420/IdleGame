import { Component } from '@angular/core';
import { CounterService } from '../service/counter.service';

@Component({
  selector: 'app-click-area',
  templateUrl: './click-area.component.html',
  styleUrls: ['./click-area.component.css']
})
export class ClickAreaComponent {

  constructor(private counterService: CounterService) { }

 

  onButtonClick(): void {
    this.counterService.increaseCounter(100);
    
  }
}
