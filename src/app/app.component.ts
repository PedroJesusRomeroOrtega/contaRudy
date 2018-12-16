import { Component, OnInit } from '@angular/core';
import { AccountEntry } from './models/accountEntry.model';
import { AccountService } from './services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
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
