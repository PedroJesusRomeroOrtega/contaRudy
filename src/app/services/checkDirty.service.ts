import { AccountEntryFormComponent } from './../account-entry-form/account-entry-form.component';
import { InjectionToken } from '@angular/core';

export let CHECKDIRTY_TOKEN = new InjectionToken('checkDirty');

export function checkDirtyState(component: AccountEntryFormComponent) {
    if (component.isDirty) {
        return window.confirm('You don´t save the data; do you really want to cancel?');
    }
    return true;
}
