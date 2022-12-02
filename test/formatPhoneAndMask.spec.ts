import { expect, it } from 'vitest'
import { formatPhoneAndMask } from '../'

it('check formatPhoneAndMask', () => {
  expect(formatPhoneAndMask('89229319232')).toBe('+7 (922) 931-92-32')
  expect(formatPhoneAndMask('79229319232')).toBe('+7 (922) 931-92-32')
  expect(formatPhoneAndMask('9229319232')).toBe('+7 (922) 931-92-32')
  expect(formatPhoneAndMask('+79229319232')).toBe('+7 (922) 931-92-32')

  expect(formatPhoneAndMask('792293192')).toBe('+7 (922) 931-92')
  expect(formatPhoneAndMask('7922931')).toBe('+7 (922) 931')
  expect(formatPhoneAndMask('7922')).toBe('+7 (922')
})

