import { AccountEntry } from './../models/accountEntry.model';
import { Injectable } from '@angular/core';

const accountEntries: AccountEntry[] = [
  {
    id: 1,
    date: new Date('13 September 1985'),
    concept: 'primer pago',
    amount: 45,
  },
  {
    id: 2,
    date: new Date('15 September 1985'),
    concept: 'segundo pago',
    amount: 50,
  },
  {
    id: 3,
    date: new Date('25 September 1985'),
    concept: 'tercer pago',
    amount: 56,
  },
];

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  getAccountEntries(): AccountEntry[] {
    return accountEntries;
  }

  getAccountEntry(id: number): AccountEntry {
    return accountEntries.find(ae => ae.id === id);
  }

  addAccountEntry(newAccountEntry: AccountEntry): void {
    newAccountEntry.id = this.nextID();
    accountEntries.push(newAccountEntry);
  }

  editAccountEntry(editAccountEntry: AccountEntry): void {
    const accountEntryInMemory = this.getAccountEntry(editAccountEntry.id);
    accountEntryInMemory.date = editAccountEntry.date;
    accountEntryInMemory.concept = editAccountEntry.concept;
    accountEntryInMemory.amount = editAccountEntry.amount;
  }

  deleteAccountEntry(accountEntryToDelete: AccountEntry): void {
    if (accountEntryToDelete) {
      // accountEntries = accountEntries.filter(ae => ae.id !== accountEntryToDelete.id);
      const indexToDelete = accountEntries.findIndex(ae => ae.id === accountEntryToDelete.id);
      accountEntries.splice(indexToDelete, 1);
    }
  }

  private nextID(): number {
    const lenghtAccountEntries = accountEntries.length || 0;
    return ((lenghtAccountEntries > 0) ? accountEntries[lenghtAccountEntries - 1].id : 0) + 1;
  }

}
