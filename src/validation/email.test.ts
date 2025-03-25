import { describe, expect, it } from 'vitest';

import { isEmail } from './email';

describe('isEmail', () => {
  it('should return true for an email address with "@" and domain', () => {
    expect(isEmail('username@example.com')).toBe(true);
  });

  it('should return true for an email address with a period in the username part', () => {
    expect(isEmail('user.name@example.com')).toBe(true);
  });

  it('should return true for an email address with subdomain', () => {
    expect(isEmail('username@subdomain.domain.com')).toBe(true);
  });

  it('should return false for an email address without "@"', () => {
    expect(isEmail('username')).toBe(false);
  });

  it('should return false for an email address missing domain', () => {
    expect(isEmail('missing@domain')).toBe(false);
  });

  it('should return false for an email address missing username', () => {
    expect(isEmail('@missingusername.com')).toBe(false);
  });

  it('should return false for an email address with an invalid character', () => {
    expect(isEmail('username@domain,com')).toBe(false);
  });

  it('should return false for an email address with an invalid domain', () => {
    expect(isEmail('username@.domain.com')).toBe(false);
  });

  it('should return false for an empty string', () => {
    expect(isEmail('')).toBe(false);
  });
});
