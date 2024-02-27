import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class FontSizeService {
  private readonly FONT_SIZE_INCREMENT = 1;
  private readonly MAX_ZOOM_COUNT = 3;
  private zoomCount = 0;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.initializeZoomCount();
  }

  private initializeZoomCount() {
    if (isPlatformBrowser(this.platformId)) {
      const storedZoomCount = sessionStorage.getItem('zoomCount');
      if (storedZoomCount !== null) {
        this.zoomCount = parseInt(storedZoomCount, 10);
      }
    }
  }

  increaseFontSize() {
    if (this.zoomCount < this.MAX_ZOOM_COUNT) {
      let currentFontSize = this.getCurrentFontSize();
      currentFontSize += this.FONT_SIZE_INCREMENT;
      this.setFontSize(currentFontSize);
      this.zoomCount++;
      this.updateZoomCount();
    }
  }

  decreaseFontSize() {
    if (this.zoomCount > 0) {
      let currentFontSize = this.getCurrentFontSize();
      currentFontSize -= this.FONT_SIZE_INCREMENT;
      this.setFontSize(currentFontSize);
      this.zoomCount--;
      this.updateZoomCount();
    }
  }

  getCurrentFontSize(): number {
    return isPlatformBrowser(this.platformId) ? parseInt(sessionStorage.getItem('fontSize') || '16', 10) : 16;
  }

  private setFontSize(fontSize: number) {
    if (isPlatformBrowser(this.platformId)) {
      sessionStorage.setItem('fontSize', fontSize.toString());
    }
  }

  private updateZoomCount() {
    if (isPlatformBrowser(this.platformId)) {
      sessionStorage.setItem('zoomCount', this.zoomCount.toString());
    }
  }

  resetFontSize() {
    this.zoomCount = 0;
    this.setFontSize(16); // Assuming 16 is the original font size
    this.updateZoomCount();
  }

  isZoomInDisabled(): boolean {
    return this.zoomCount >= this.MAX_ZOOM_COUNT;
  }

  isZoomOutDisabled(): boolean {
    return this.zoomCount <= 0;
  }
}
