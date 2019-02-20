import { Component, OnInit, OnDestroy } from '@angular/core';
import { AccountEntry } from '../models/accountEntry.model';
import { AccountService } from '../account.service';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-account-entry-view',
  templateUrl: './account-entry-view.component.html',
  styleUrls: ['./account-entry-view.component.scss'],
})
export class AccountEntryViewComponent implements OnInit, OnDestroy {
  title = 'contaRudy';
  accountEntries: AccountEntry[];
  private _destroyed$: Subject<void> = new Subject();

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.loadAccountEntries();
  }

  ngOnDestroy(): void {
    this._destroyed$.next();
    this._destroyed$.complete();
  }

  accountEntryDeletedHandler($event: any) {
    this.loadAccountEntries();
  }

  private loadAccountEntries(): void {
    this.accountService
      .getAccountEntries()
      .pipe(takeUntil(this._destroyed$))
      .subscribe((accountEntries) => (this.accountEntries = accountEntries));
  }
}
