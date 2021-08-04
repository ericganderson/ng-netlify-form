import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-lang-select',
  templateUrl: './lang-select.component.html',
  styleUrls: ['./lang-select.component.scss'],
})
export class LangSelectComponent implements OnInit {
  constructor(private languageService: LanguageService) {}

  changeLocale(locale: string) {
    this.languageService.changeLocale(locale);
  }
  ngOnInit(): void {}
}
