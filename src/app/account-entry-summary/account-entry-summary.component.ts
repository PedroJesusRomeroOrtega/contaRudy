import { AccountEntry } from './../models/accountEntry.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-account-entry-summary',
  templateUrl: './account-entry-summary.component.html',
  styleUrls: ['./account-entry-summary.component.scss']
})
export class AccountEntrySummaryComponent {
  @Input() accountEntry: AccountEntry;

}
