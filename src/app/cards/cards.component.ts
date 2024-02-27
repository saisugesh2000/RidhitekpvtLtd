import { Component } from '@angular/core';
import { ThemeServiceService } from '../theme-service.service';
import { FontSizeService } from '../font-size.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  constructor(public themeService: ThemeServiceService, private fontSizeService:FontSizeService) {}





  // font-zize
increaseFontSize() {
  this.fontSizeService.increaseFontSize();
}

// Method to decrease font size by calling the service
decreaseFontSize() {
  this.fontSizeService.decreaseFontSize();
}

// Getter to access font size from the service
get fontSize() {
  return this.fontSizeService.getCurrentFontSize();
}
}
