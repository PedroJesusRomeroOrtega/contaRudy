import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { AccountEntryListComponent } from './account-entry-list/account-entry-list.component';
import { AccountEntryFormComponent } from './account-entry-form/account-entry-form.component';
import { AccountEntryViewComponent } from './account-entry-view/account-entry-view.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ElementNotFoundComponent } from './common/element-not-found/element-not-found.component';
import { ExistAccountEntryGuard } from './account-entry/exist-account-entry.guard';

@NgModule({
  declarations: [
    AppComponent,
    AccountEntryListComponent,
    AccountEntryFormComponent,
    AccountEntryViewComponent,
    PageNotFoundComponent,
    ElementNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, // TODO: REMOVE FORMS MULE
    ReactiveFormsModule,
    MaterialModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [ExistAccountEntryGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
