import { AccountService } from './../services/account.service';
import { AccountEntry } from './../models/accountEntry.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-account-entry-form',
  templateUrl: './account-entry-form.component.html',
  styleUrls: ['./account-entry-form.component.scss']
})
export class AccountEntryFormComponent implements OnInit {
  accountEntry: AccountEntry = <AccountEntry>{};
  // @Output() accountEntryAdded: EventEmitter<any> = new EventEmitter();

  constructor(private accountService: AccountService,
    private router: Router) { }

  ngOnInit() {
  }

  onSubmit(): void {
    this.accountService.addAccountEntry(this.accountEntry);
    // this.accountEntryAdded.emit();
    this.router.navigate(['/accounts']);
  }
}
