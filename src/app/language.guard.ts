import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { LanguageService } from './language.service';

@Injectable({
  providedIn: 'root'
})
export class LanguageGuard implements CanActivate {

  constructor(private languageService: LanguageService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.languageService.initializeLanguage();
    return true;
  }
}
