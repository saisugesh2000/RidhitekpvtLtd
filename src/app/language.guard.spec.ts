import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class FontSizeService {
  private readonly MIN_FONT_SIZE = 14;
  private readonly MAX_FONT_SIZE = 18;
  private readonly FONT_SIZE_INCREMENT = 2;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  increaseFontSize() {
    let currentFontSize = this.getCurrentFontSize();
    if (currentFontSize < this.MAX_FONT_SIZE) {
      currentFontSize += this.FONT_SIZE_INCREMENT;
      this.setFontSize(currentFontSize);
    }
  }

  decreaseFontSize() {
    let currentFontSize = this.getCurrentFontSize();
    if (currentFontSize > this.MIN_FONT_SIZE) {
      currentFontSize -= this.FONT_SIZE_INCREMENT;
      this.setFontSize(currentFontSize);
    }
  }

  getCurrentFontSize(): number {
    return isPlatformBrowser(this.platformId) ? parseInt(localStorage.getItem('fontSize') || '16', 10) : 16;
  }

  private setFontSize(fontSize: number) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('fontSize', fontSize.toString());
    }
  }
}
