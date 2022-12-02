import { expect, it } from 'vitest'
import { formatPrice } from '../'

it('check formatPrice', () => {
  expect(formatPrice(1000000000)).toBe('1 000 000 000')
  expect(formatPrice('100000000')).toBe('100 000 000')
  expect(formatPrice(10000000)).toBe('10 000 000')
  expect(formatPrice('1000000')).toBe('1 000 000')
  expect(formatPrice(10000)).toBe('10 000')
  expect(formatPrice('1000')).toBe('1 000')
  expect(formatPrice(100)).toBe('100')
  expect(formatPrice('10')).toBe('10')
  expect(formatPrice(1)).toBe('1')
})

