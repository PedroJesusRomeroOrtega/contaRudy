import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { AccountEntryListComponent } from './account-entry-list/account-entry-list.component';
import { AccountEntryFormComponent } from './account-entry-form/account-entry-form.component';
import { AccountEntryViewComponent } from './account-entry-view/account-entry-view.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

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
    FormsModule, // TODO: REMOVE FORMS MULE
    ReactiveFormsModule,
    MaterialModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
