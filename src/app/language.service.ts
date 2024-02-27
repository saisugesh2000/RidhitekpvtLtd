import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  selectedLanguage: any;

  constructor(private translate: TranslateService) { }

  initializeLanguage() {
    if (typeof window !== 'undefined') {
      const selectedLanguage = sessionStorage.getItem('selectedLanguage');
      if (selectedLanguage) {
        this.translate.use(selectedLanguage);
      } else {
        const browserLang = this.translate.getBrowserLang();
        // Use nullish coalescing operator (??) to provide a default value if browserLang is undefined
        const langToUse = browserLang ?? 'en';
        this.translate.setDefaultLang(langToUse);
        sessionStorage.setItem('selectedLanguage', langToUse);
      }
    }
  }
  
  switchLanguage(event: any) {
    const language = event.target.value;
    this.translate.use(language);
    sessionStorage.setItem('selectedLanguage', language); // Store selected language in sessionStorage
    // Update language toggle option
    this.selectedLanguage = language;
  }
  
  


  
}
