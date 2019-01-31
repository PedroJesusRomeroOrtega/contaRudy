import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { AccountService } from '../account.service';
import { AccountEntry } from '../../models/accountEntry.model';
import { MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-account-entry-list',
  templateUrl: './account-entry-list.component.html',
  styleUrls: ['./account-entry-list.component.scss']
})
export class AccountEntryListComponent implements OnInit {
  displayedColumns: string[];
  @Input() accountEntries: AccountEntry[];
  dataSourceAccountEntries: MatTableDataSource<AccountEntry>;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private accountService: AccountService) {

  }

  ngOnInit(): void {
    this.displayedColumns = ['date', 'concept', 'amount', 'actions'];
    this.dataSourceAccountEntries = new MatTableDataSource(this.accountEntries);
    this.dataSourceAccountEntries.sort = this.sort;
  }

  deleteItem(accountEntry): void {
    this.accountService.deleteAccountEntry(accountEntry);
    this.refresh();
  }

  private refresh(): void {
    // this.dataSourceAccountEntries.filter='';
    this.dataSourceAccountEntries.sort = null;
    this.dataSourceAccountEntries.sort = this.sort;
  }

}
