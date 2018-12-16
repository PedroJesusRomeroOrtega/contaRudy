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

  addAccountEntry(newAccountEntry: AccountEntry): void {
    const lastAccountEntry = accountEntries[accountEntries.length - 1];
    newAccountEntry.id = lastAccountEntry.id + 1;
    accountEntries.push(newAccountEntry);
  }
}
