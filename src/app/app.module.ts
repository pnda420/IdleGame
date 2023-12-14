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

@NgModule({
  declarations: [
    AppComponent,
    ClickAreaComponent,
    StatusbarComponent,
    WorkerComponent,
    UpgradelistComponent,
    MoneyProgressComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    TableModule,
    CardModule,
    ProgressBarModule,
    ToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
