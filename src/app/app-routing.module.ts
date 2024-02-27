import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainRidhitekComponent } from './main-ridhitek/main-ridhitek.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CardsComponent } from './cards/cards.component';
import { PaymentsComponent } from './payments/payments.component';
import { DigitalizationComponent } from './digitalization/digitalization.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { LanguageGuard } from './language.guard';

const routes: Routes = [
  {path:"",component:MainRidhitekComponent},
  {path:"About-us",component:AboutUsComponent},
  {path:"contact-us",component:ContactUsComponent},
  {path:"footer",component:FooterComponent,},
  {path:"header",component:HeaderComponent},
  {path:"cards",component:CardsComponent},
  {path:"payments",component:PaymentsComponent},
  {path:"Digitalization",component:DigitalizationComponent},
  {path:"dashboard",component:DashboardComponent}
  // { path: '', component: HeaderComponent, canActivate: [LanguageGuard],children: [
  //     // Define child routes here if needed
  //   ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
