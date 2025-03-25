import { describe, it, expect } from 'vitest';

import { isPhoneNumber } from './phoneNumber';

describe('isPhoneNumber', () => {
  it('should return true for a phone number with hyphens', () => {
    expect(isPhoneNumber('010-1234-5678')).toBe(true);
  });

  it('should return true for a phone number without hyphens', () => {
    expect(isPhoneNumber('01012345678')).toBe(true);
  });

  it('should return false for a phone number not starting with 010', () => {
    expect(isPhoneNumber('011-1234-5678')).toBe(false);
  });

  it('should return false for a phone number with more digits than allowed', () => {
    expect(isPhoneNumber('010123456789')).toBe(false);
  });

  it('should return false for a phone number with insufficient digits', () => {
    expect(isPhoneNumber('010-1234-567')).toBe(false);
    expect(isPhoneNumber('010-123-4567')).toBe(false);
  });

  it('should return false for a phone number with hyphens in the wrong positions', () => {
    expect(isPhoneNumber('010-12345-678')).toBe(false);
    expect(isPhoneNumber('010-123-45678')).toBe(false);
  });

  it('should return false for a phone number with non-numeric characters', () => {
    expect(isPhoneNumber('010-1234-abc8')).toBe(false);
  });
});
