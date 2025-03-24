const regExp = /^(010-\d{4}-\d{4}$)|(^010\d{4}\d{4}$)/;

export function isPhoneNumber(string: string): boolean {
  return regExp.test(string);
}
