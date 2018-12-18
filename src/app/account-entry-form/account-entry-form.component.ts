import { AccountService } from './../services/account.service';
import { AccountEntry } from './../models/accountEntry.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-account-entry-form',
  templateUrl: './account-entry-form.component.html',
  styleUrls: ['./account-entry-form.component.scss']
})
export class AccountEntryFormComponent implements OnInit {
  accountEntry: AccountEntry = <AccountEntry>{};

  constructor(private accountService: AccountService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    // TODO: when i use observable, change to this approach.
    // this.hero$ = this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) =>
    //     this.service.getHero(params.get('id')))
    // );
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.accountEntry = this.accountService.getAccountEntry(+id);
    }
  }

  onSubmit(): void {
    if (this.accountEntry.id && this.accountEntry.id > 0) {
      this.accountService.editAccountEntry(this.accountEntry);
    } else {
      this.accountService.addAccountEntry(this.accountEntry);
    }

    this.router.navigate(['/accounts']);
  }
}
