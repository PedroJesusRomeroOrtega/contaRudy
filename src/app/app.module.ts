import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AccountEntryListComponent } from './account-entry-list/account-entry-list.component';
import { AccountEntryFormComponent } from './account-entry-form/account-entry-form.component';
import { AccountEntryViewComponent } from './account-entry-view/account-entry-view.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AccountEntryListComponent,
    AccountEntryFormComponent,
    AccountEntryViewComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
