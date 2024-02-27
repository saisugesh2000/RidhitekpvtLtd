import { Component, OnInit } from '@angular/core';
import { ThemeServiceService } from '../theme-service.service';
import { FontSizeService } from '../font-size.service';

@Component({
  selector: 'app-main-ridhitek',
  templateUrl: './main-ridhitek.component.html',
  styleUrl: './main-ridhitek.component.css'
})
export class MainRidhitekComponent implements OnInit {
  constructor(public themeService: ThemeServiceService,private fontSizeService:FontSizeService) {}


  // page load spinner
  loading:boolean = true;

  ngOnInit(): void {
    setTimeout(()=>{
      this.loading = false
    },3000)
  }

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
