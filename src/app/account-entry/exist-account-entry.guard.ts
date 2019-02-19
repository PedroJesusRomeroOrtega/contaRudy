import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AccountService } from './account.service';
import { take, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ExistAccountEntryGuard implements CanActivate {
  constructor(private accountService: AccountService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.accountService.getAccountEntry(next.params['id']).pipe(
      take(1),
      map((accountEntry) => !!accountEntry),
      tap((accountEntryExist) => {
        if (!accountEntryExist) {
          this.router.navigate(['/404']);
        } else {
          return accountEntryExist;
        }
      }),
    );
  }
}
// return this.accountService
//   .getAccountEntry(next.params['id'])
//   .pipe(take(1))
//   .subscribe((accountEntry) => {
//     const accountEntryExist = !!accountEntry;
//     if (!accountEntryExist) {
//       this.router.navigate(['/404']).then(() => true);
//     }
//     return accountEntryExist;
//   });
