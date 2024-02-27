import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CardsComponent } from './cards/cards.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DigitalizationComponent } from './digitalization/digitalization.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainRidhitekComponent } from './main-ridhitek/main-ridhitek.component';
import { PaymentsComponent } from './payments/payments.component';
import { HttpClientModule,HttpClient } from '@angular/common/http'; 
import { ReactiveFormsModule } from '@angular/forms';
import { NumericOnlyDirective } from './numeric-only.directive';
import { ThemeServiceService } from './theme-service.service';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LanguageGuard } from './language.guard';
import { LanguageService } from './language.service';
import { FontSizeService } from './font-size.service';
import { RouterModule } from '@angular/router';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactUsService } from './contact-us.service';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NgxPaginationModule } from 'ngx-pagination';
import { SerachContactUsPipe } from './serach-contact-us.pipe';








// Create a function that returns the translation loader
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http,'./assets/i18n/','.json');
  }

@NgModule({
    declarations: [
        AppComponent,
        AboutUsComponent,
        CardsComponent,
        ContactUsComponent,
        DigitalizationComponent,
        FooterComponent,
        MainRidhitekComponent,
        PaymentsComponent,
        NumericOnlyDirective,
        LoadingSpinnerComponent,
        DashboardComponent,
        SerachContactUsPipe,
     
       
        
     
       
    ],
    providers: [
        provideClientHydration(),
        ThemeServiceService, 
        LanguageService, LanguageGuard,
        FontSizeService,
        ContactUsService,
        
        provideAnimationsAsync(),
    
        
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HeaderComponent,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterModule,
        NgxPaginationModule,
      
      
        TranslateModule.forRoot({
            loader: {
              provide: TranslateLoader,
              useFactory: HttpLoaderFactory,
              deps: [HttpClient]
            }
          })
        
    ]
})
export class AppModule { }
