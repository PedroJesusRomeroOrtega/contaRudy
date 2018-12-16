import { AccountService } from './../services/account.service';
import { AccountEntry } from './../models/accountEntry.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-account-entry-form',
  templateUrl: './account-entry-form.component.html',
  styleUrls: ['./account-entry-form.component.scss']
})
export class AccountEntryFormComponent implements OnInit {
  accountEntry: AccountEntry = <AccountEntry>{};
  @Output() accountEntryAdded: EventEmitter<any> = new EventEmitter();

  constructor(private accountService: AccountService) { }

  ngOnInit() {
  }

  onSubmit(): void {
    this.accountService.addAccountEntry(this.accountEntry);
    this.accountEntryAdded.emit();
  }
}
