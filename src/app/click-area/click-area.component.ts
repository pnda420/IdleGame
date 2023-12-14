import { Component } from '@angular/core';
import { CounterService } from '../service/counter.service';

@Component({
  selector: 'app-click-area',
  templateUrl: './click-area.component.html',
  styleUrls: ['./click-area.component.css']
})
export class ClickAreaComponent {

  constructor(private counterService: CounterService) { }

  clickAmmount: number = 5000;

  onButtonClick(): void {
    this.counterService.increaseCounter(this.clickAmmount);
    
  }
}
