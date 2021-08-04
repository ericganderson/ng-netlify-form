import { Pipe, PipeTransform } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Pipe({
  name: 'translate',
  pure: false,
})
export class TranslatePipe implements PipeTransform {
  constructor(private translationService: LanguageService) {}

  transform(value: any, args?: any): any {
    return this.translationService.translate(value);
  }
}
