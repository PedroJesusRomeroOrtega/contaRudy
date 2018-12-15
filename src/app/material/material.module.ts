import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatSortModule } from '@angular/material';

@NgModule({
  exports: [
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
  ]
})
export class MaterialModule { }
