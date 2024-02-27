import { Component } from '@angular/core';
import { ThemeServiceService } from '../theme-service.service';
import { FontSizeService } from '../font-size.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  constructor(public themeService: ThemeServiceService,private fontSizeService:FontSizeService) {}

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
