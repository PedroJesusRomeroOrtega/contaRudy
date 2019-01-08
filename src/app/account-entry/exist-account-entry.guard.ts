import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AccountService } from './../services/account.service';

@Injectable({
  providedIn: 'root'
})
export class ExistAccountEntryGuard implements CanActivate {

  constructor(private accountService: AccountService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const accountEntryExist = !!this.accountService.getAccountEntry(+next.params['id']);
    if (!accountEntryExist) {
      this.router.navigate(['/404']).then(() => true);
    }
    return accountEntryExist;
  }
}
