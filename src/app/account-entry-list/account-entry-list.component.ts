import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { AccountService } from '../services/account.service';
import { AccountEntry } from '../models/accountEntry.model';
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


  ngOnInit() {
    this.displayedColumns = ['date', 'concept', 'amount'];
    this.dataSourceAccountEntries = new MatTableDataSource(this.accountEntries);
    this.dataSourceAccountEntries.sort = this.sort;
  }

}
