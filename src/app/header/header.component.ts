import { Component, OnInit } from '@angular/core';
import { ThemeServiceService } from '../theme-service.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../language.service';
import { FontSizeService } from '../font-size.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';





@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule,RouterModule,FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent  implements OnInit{
  
  isMenuOpen: boolean = false;
  openDropdown: string | null = null;
  selectedLanguage!: string;

  toggleclick() {
    console.log("Menu clicked");
    this.isMenuOpen = !this.isMenuOpen;
  
  }

  
  toggleDropdown(dropdown: string) {
    if (this.openDropdown === dropdown) {
      this.openDropdown = null; // Close the dropdown if already open
    } else {
      this.openDropdown = dropdown; // Open the clicked dropdown
    }
  }

  closeDropdowns() {
    this.openDropdown = null; // Close all dropdowns
  }


  constructor(public themeService: ThemeServiceService,private translate:TranslateService,private languageService: LanguageService,public fontSizeService:FontSizeService) {
    translate.setDefaultLang('en'); // Set the default language
  }

  ngOnInit() {
    this.languageService.initializeLanguage(); // Initialize language on application start
    this.selectedLanguage = this.translate.currentLang;
  }
  
  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
 
  storedarklightmode(event:any){
    console.log("checked");
    const  isChecked = event.target.checked;
    console.log(isChecked)

   }

  // language toggle
  switchLanguage(event: any) {
    const language = event.target.value;
    this.translate.use(language);
    sessionStorage.setItem('selectedLanguage', language); // Store selected language in localStorage
  }

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
