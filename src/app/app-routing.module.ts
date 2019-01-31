import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';
import { AccountEntryViewComponent } from './account-entry/account-entry-view/account-entry-view.component';
import { AccountEntryFormComponent } from './account-entry/account-entry-form/account-entry-form.component';
import { ElementNotFoundComponent } from './common/element-not-found/element-not-found.component';
import { ExistAccountEntryGuard } from './account-entry/exist-account-entry.guard';
import { CHECKDIRTY_TOKEN } from './account-entry/checkDirty.service';

const appRoutes: Routes = [
  { path: '', component: AccountEntryViewComponent },
  { path: 'new', component: AccountEntryFormComponent, canDeactivate: [CHECKDIRTY_TOKEN] },
  { path: 'edit/:id', component: AccountEntryFormComponent, canActivate: [ExistAccountEntryGuard], canDeactivate: [CHECKDIRTY_TOKEN] },
  { path: '404', component: ElementNotFoundComponent },
  // { path: '', redirectTo: '/accounts', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
