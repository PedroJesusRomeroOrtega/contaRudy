import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { HttpErrorHandler, HandleError } from '../core/http-error-handler.service';
import { AccountEntry, AccountEntryDB } from './models';

// TODO: look at authorization
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private handleError: HandleError;

  constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('AccountService');
  }

  getAccountEntries(): Observable<AccountEntry[]> {
    return this.http.get<AccountEntryDB[]>('/api/accountEntries').pipe(
      map((accountEntriesDB) => this.mapperAll(accountEntriesDB)),
      catchError(this.handleError('getAccountEntries', [])),
    );
  }

  getAccountEntry(id: string): Observable<AccountEntry> {
    return this.http.get<AccountEntryDB>(`/api/accountEntries/${id}`).pipe(
      map((accountEntryDB) => this.mapperOne(accountEntryDB)),
      catchError(this.handleError<AccountEntry>('getAccountEntry')),
    );
  }

  addAccountEntry(newAccountEntry: AccountEntry): Observable<AccountEntry> {
    return this.http
      .post<AccountEntry>('/api/accountEntries/', newAccountEntry, httpOptions)
      .pipe(catchError(this.handleError('addAccountEntry', newAccountEntry)));
  }

  updateAccountEntry(editAccountEntry: AccountEntry): Observable<AccountEntry> {
    httpOptions.headers = httpOptions.headers.set('Authorization', 'my-new-auth-token');

    return this.http
      .put<AccountEntry>(`/api/accountEntries/${editAccountEntry.id}`, editAccountEntry, httpOptions)
      .pipe(catchError(this.handleError('updateAccountEntry', editAccountEntry)));
  }

  deleteAccountEntry(id: string): Observable<{}> {
    return this.http
      .delete(`/api/accountEntries/${id}`, httpOptions)
      .pipe(catchError(this.handleError('deleteAccountEntry')));
  }

  private mapperAll = (accountEntriesDB: AccountEntryDB[]): AccountEntry[] =>
    accountEntriesDB.map((aesdb) => this.mapperOne(aesdb));

  private mapperOne = (accountEntryDB: AccountEntryDB): AccountEntry =>
    <AccountEntry>{
      id: accountEntryDB._id,
      date: accountEntryDB.date,
      concept: accountEntryDB.concept,
      amount: accountEntryDB.amount,
    };
}
