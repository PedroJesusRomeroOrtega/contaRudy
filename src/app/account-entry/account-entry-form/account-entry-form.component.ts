import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';

import { AccountService } from './../../services/account.service';
import { AccountEntry } from './../../models/accountEntry.model';

@Component({
  selector: 'app-account-entry-form',
  templateUrl: './account-entry-form.component.html',
  styleUrls: ['./account-entry-form.component.scss']
})
export class AccountEntryFormComponent implements OnInit, OnDestroy {
  accountEntry: AccountEntry = <AccountEntry>{};
  accountEntryForm: FormGroup = this.fb.group({});
  isDirty = false;
  private _destroyed$ = new Subject();

  constructor(private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private accountService: AccountService, ) { }

  ngOnInit() {
    // TODO: when i use observable, change to this approach.
    // this.hero$ = this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) =>
    //     this.service.getHero(params.get('id')))
    // );
    const id = this.route.snapshot.paramMap.get('id');
    this.createForm(+id);
    this.onChanges();
  }

  onSubmit(): void {
    this.isDirty = false;
    const accountEntry = this.mapper(this.accountEntryForm.value);
    if (accountEntry.id && accountEntry.id > 0) {
      this.accountService.editAccountEntry(accountEntry);
    } else {
      this.accountService.addAccountEntry(accountEntry);
    }

    this.router.navigate(['/']);
  }

  ngOnDestroy(): void {
    this._destroyed$.next();
    this._destroyed$.complete();
  }

  private createForm(id: number): void {
    if (id && id > 0) {
      this.accountEntry = this.accountService.getAccountEntry(+id);
      this.accountEntryForm = this.fb.group({
        date: [this.accountEntry.date, Validators.required],
        concept: [this.accountEntry.concept, Validators.required],
        amount: [this.accountEntry.amount, Validators.required]
      });
    } else {
      this.accountEntryForm = this.fb.group({
        date: [new Date(), Validators.required],
        concept: ['', Validators.required],
        amount: ['', Validators.required]
      });
    }
  }

  private mapper(formValues: any): AccountEntry {
    this.accountEntry.date = formValues.date;
    this.accountEntry.concept = formValues.concept;
    this.accountEntry.amount = formValues.amount;
    return this.accountEntry;
  }

  private onChanges(): void {
    this.accountEntryForm.valueChanges.pipe(takeUntil(this._destroyed$)).subscribe(val => {
      if (!this.isDirty) {
        this.isDirty = true;
      }
    });
  }

}
