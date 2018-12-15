import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { AccountEntry } from '../models/accountEntry.model';

@Component({
  selector: 'app-account-entry-list',
  templateUrl: './account-entry-list.component.html',
  styleUrls: ['./account-entry-list.component.scss']
})
export class AccountEntryListComponent implements OnInit {
  displayedColumns: string[] = ['date', 'concept', 'amount'];
  accountEntries: AccountEntry[];

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.accountEntries = this.accountService.getAccountEntries();
  }

}
