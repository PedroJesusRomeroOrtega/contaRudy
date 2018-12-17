import { Component, OnInit } from '@angular/core';
import { AccountEntry } from '../models/accountEntry.model';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-account-entry-view',
  templateUrl: './account-entry-view.component.html',
  styleUrls: ['./account-entry-view.component.scss']
})
export class AccountEntryViewComponent implements OnInit {
  title = 'contaRudy';
  accountEntries: AccountEntry[];

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.loadAccountEntries();
  }

  accountEntryAddedHandler($event: any) {
    this.loadAccountEntries();
  }

  private loadAccountEntries(): void {
    this.accountEntries = this.accountService.getAccountEntries();
  }
}
