import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { AccountEntryListComponent } from './account-entry/account-entry-list/account-entry-list.component';
import { AccountEntryFormComponent } from './account-entry/account-entry-form/account-entry-form.component';
import { AccountEntryViewComponent } from './account-entry/account-entry-view/account-entry-view.component';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';
import { ElementNotFoundComponent } from './common/element-not-found/element-not-found.component';
import { ExistAccountEntryGuard } from './account-entry/exist-account-entry.guard';
import { CHECKDIRTY_TOKEN, checkDirtyState } from './account-entry/checkDirty.service';
import { MAT_DATE_LOCALE } from '@angular/material';

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
  providers: [
    ExistAccountEntryGuard,
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES'},
    { provide: CHECKDIRTY_TOKEN, useValue: checkDirtyState }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
