import { ValidatorFn } from '@angular/forms';

export function emailValidator(domains: string[]): ValidatorFn {
  const domainString = domains.join('|');
  //const regExp = new RegExp(`[a-z0-9._%+-]+@gmail\.(${domainString})`);
   const regExp = new RegExp(`^[a-z0-9._%+-]+@[a-z0-9.-]+\\.(${domainString})`);
  //"^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"

  return (control) => {
    const isEmailInvalid = control.value === '' || regExp.test(control.value);
    return isEmailInvalid ? null : { emailValidator: true };
  };
}