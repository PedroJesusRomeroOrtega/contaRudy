import { Routes } from '@angular/router';
import { AccountEntryViewComponent } from './account-entry-view/account-entry-view.component';
import { AccountEntryFormComponent } from './account-entry-form/account-entry-form.component';

export const appRoutes: Routes = [
    { path: 'accounts', component: AccountEntryViewComponent },
    { path: 'accounts/new', component: AccountEntryFormComponent },
    { path: '', redirectTo: '/accounts', pathMatch: 'full' },
    { path: '**', redirectTo: '/accounts' },
];
