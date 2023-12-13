import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClickAreaComponent } from './click-area/click-area.component';
import { StatusbarComponent } from './statusbar/statusbar.component';
import { WorkerComponent } from './worker/worker.component';
import { UpgradelistComponent } from './upgradelist/upgradelist.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    ClickAreaComponent,
    StatusbarComponent,
    WorkerComponent,
    UpgradelistComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    TableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
