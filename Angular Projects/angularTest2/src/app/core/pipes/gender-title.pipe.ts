import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genderTitle',
})
export class GenderTitlePipe implements PipeTransform {
  // If Gender is Male prepend Mr.
  // If Gender is Female prepend Ms.
  transform(value: string, ...args: string[]): any {
    if (value === null || value === undefined) {
      return '-';
    } else if (value.toLowerCase() === 'male') {
      return 'Mr.';
    } else if (value.toLowerCase() === 'female') {
      return 'Ms.';
    } else {
      return '-';
    }
  }
}
