import { ValidationErrors, AbstractControl, ValidatorFn } from '@angular/forms';

export class RegisterValidators {
  static match(contorlName: string, matchingControlName: string): ValidatorFn {
    return (group: AbstractControl): ValidationErrors | null => {
      const contorl = group.get(contorlName);
      const matchingContorl = group.get(matchingControlName);

      if (!contorl || !matchingContorl) {
        return { controlNotFound: false };
      }

      const error =
        contorl.value === matchingContorl.value ? null : { noMatch: true };

      matchingContorl.setErrors(error);
      return error;
    };
  }
}
