import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import {FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AccountEntryListComponent } from './account-entry-list/account-entry-list.component';
import { AccountEntryFormComponent } from './account-entry-form/account-entry-form.component';
import { appRoutes } from './app.routes';
import { AccountEntryViewComponent } from './account-entry-view/account-entry-view.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountEntryListComponent,
    AccountEntryFormComponent,
    AccountEntryViewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
