import { Component } from '@angular/core';
import { UpdatePWAService } from './services/update-pwa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private updatePWAService: UpdatePWAService) {

  }
}
