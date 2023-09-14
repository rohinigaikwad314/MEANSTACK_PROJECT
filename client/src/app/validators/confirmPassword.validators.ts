import { FormGroup } from '@angular/forms';

export const confirmPasswordValidators = (
  controlName: string,
  controlNameToMatch: string
) => {
  return (formGroup: FormGroup) => {
    let control = formGroup.controls[controlName];
    let controlToMatch = formGroup.controls[controlNameToMatch];

    if (
      controlToMatch.errors &&
      !controlToMatch.errors['confirmPasswordValidators']
    ) {
      return;
    }
    if (control.value !== controlToMatch.value) {
      controlToMatch.setErrors({ confirmPasswordValidators: true });
    } else {
      controlToMatch.setErrors(null);
    }
  };
};
