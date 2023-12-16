import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClickAreaComponent } from './click-area/click-area.component';
import { StatusbarComponent } from './statusbar/statusbar.component';
import { WorkerComponent } from './worker/worker.component';
import { UpgradelistComponent } from './upgradelist/upgradelist.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { MoneyProgressComponent } from './money-progress/money-progress.component';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { ClockComponent } from './clock/clock.component';
import { DialogModule } from 'primeng/dialog';
import { GamebarComponent } from './gamebar/gamebar.component';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { FormsModule } from '@angular/forms';
import { ToolbarModule } from 'primeng/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    ClickAreaComponent,
    StatusbarComponent,
    WorkerComponent,
    UpgradelistComponent,
    MoneyProgressComponent,
    ClockComponent,
    GamebarComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    TableModule,
    CardModule,
    ProgressBarModule,
    ToastModule,
    DialogModule,
    ToggleButtonModule,
    FormsModule,
    ToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
