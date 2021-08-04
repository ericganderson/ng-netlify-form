import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'gilberto makes designs!';
  constructor(
    public translate: TranslateService,
    private languageService: LanguageService
  ) {
    translate.setDefaultLang('es');
    translate.use('en');
  }
  changeLocale(locale: string) {
    this.languageService.changeLocale(locale);
    this.translate.use(locale);
  }
}
