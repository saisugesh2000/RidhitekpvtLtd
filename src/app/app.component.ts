import { Component} from '@angular/core';
import { ThemeServiceService } from './theme-service.service';
import { LanguageService } from './language.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
  title = 'Ridhitek_Temp3_new';
  constructor(private themeService: ThemeServiceService,private languageService: LanguageService) {}
  ngOnInit(): void {
    this.languageService.initializeLanguage();
  }
 
}
