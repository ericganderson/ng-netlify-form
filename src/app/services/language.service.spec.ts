import { TestBed } from '@angular/core/testing';

import { LanguageService } from 'src/app/services/language.service';

describe('I18nServiceService', () => {
  let service: LanguageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LanguageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
