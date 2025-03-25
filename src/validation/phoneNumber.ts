const regExp = /^(010-\d{4}-\d{4}$)|(^010\d{4}\d{4}$)/;

export const isPhoneNumber = (string: string): boolean => regExp.test(string);
