import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccountEntrySummaryComponent } from './account-entry-summary/account-entry-summary.component';
import { AccountEntryListComponent } from './account-entry-list/account-entry-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountEntrySummaryComponent,
    AccountEntryListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
