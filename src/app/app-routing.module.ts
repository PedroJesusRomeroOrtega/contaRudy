import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AccountEntryViewComponent } from './account-entry-view/account-entry-view.component';
import { AccountEntryFormComponent } from './account-entry-form/account-entry-form.component';
import { ElementNotFoundComponent } from './common/element-not-found/element-not-found.component';
import { ExistAccountEntryGuard } from './account-entry/exist-account-entry.guard';

const appRoutes: Routes = [
  { path: '', component: AccountEntryViewComponent },
  { path: 'new', component: AccountEntryFormComponent },
  { path: 'edit/:id', component: AccountEntryFormComponent, canActivate: [ExistAccountEntryGuard] },
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
