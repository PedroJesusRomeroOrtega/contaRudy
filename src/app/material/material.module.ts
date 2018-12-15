import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material';

@NgModule({
  exports: [
    BrowserAnimationsModule,
    MatTableModule,
  ]
})
export class MaterialModule { }
