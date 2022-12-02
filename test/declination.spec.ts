import { expect, it } from 'vitest'
import { declination } from '../'

it('check declination', () => {
  expect(declination(10, ['яблоко', 'яблока', 'яблок'])).toBe('яблок')
  expect(declination(2, ['яблоко', 'яблока', 'яблок'])).toBe('яблока')
  expect(declination(1, ['яблоко', 'яблока', 'яблок'])).toBe('яблоко')
})
