import {
  Component,
  OnInit,
  ViewChild,
  Input,
  OnDestroy,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { AccountService } from '../account.service';
import { AccountEntry } from '../models/accountEntry.model';
import { MatSort, MatTableDataSource } from '@angular/material';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-account-entry-list',
  templateUrl: './account-entry-list.component.html',
  styleUrls: ['./account-entry-list.component.scss'],
})
export class AccountEntryListComponent implements OnInit, OnChanges, OnDestroy {
  // @Input() obsAccountEntries: Observable<AccountEntry[]>;
  @Input() accountEntries: AccountEntry[];
  @Output() accountEntryDeleted: EventEmitter<any> = new EventEmitter();
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[];
  dataSourceAccountEntries: MatTableDataSource<AccountEntry>;
  private _destroyed$ = new Subject();
  // accountEntries: AccountEntry[];

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.displayedColumns = ['date', 'concept', 'amount', 'actions'];
    this.dataSourceAccountEntries = new MatTableDataSource();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.accountEntries.isFirstChange()) {
      this.dataSourceAccountEntries.data = changes.accountEntries.currentValue;
      this.refresh();
    }
  }

  ngOnDestroy(): void {
    this._destroyed$.next();
    this._destroyed$.complete();
  }

  deleteItem(accountEntry: AccountEntry): void {
    this.accountService
      .deleteAccountEntry(accountEntry.id)
      .pipe(takeUntil(this._destroyed$))
      .subscribe(() => {
        this.accountEntryDeleted.emit(null);
      });
  }

  private refresh(): void {
    // this.dataSourceAccountEntries.filter='';
    this.dataSourceAccountEntries.sort = null;
    this.dataSourceAccountEntries.sort = this.sort;
  }
}
