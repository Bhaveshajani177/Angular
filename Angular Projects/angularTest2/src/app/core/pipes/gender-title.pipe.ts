import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genderTitle',
})
export class GenderTitlePipe implements PipeTransform {
  // If Gender is Male prepend Mr.
  // If Gender is Female prepend Ms.
  transform(value: string, ...args: string[]): any {
    if (value === 'male') {
      return 'Mr.';
    } else if (value === 'female') {
      return 'Ms.';
    }
  }
}
