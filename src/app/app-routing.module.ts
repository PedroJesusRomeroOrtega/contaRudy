import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AccountEntryViewComponent } from './account-entry-view/account-entry-view.component';
import { AccountEntryFormComponent } from './account-entry-form/account-entry-form.component';

const appRoutes: Routes = [
  { path: '', component: AccountEntryViewComponent },
  { path: 'new', component: AccountEntryFormComponent },
  { path: 'edit/:id', component: AccountEntryFormComponent },
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
