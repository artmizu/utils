import { expect, it } from 'vitest'
import { formatFileSize } from '../'

it('check formatFileSize', () => {
  expect(formatFileSize(8)).toBe('8 б')
  expect(formatFileSize(1024)).toBe('1 кб')
  expect(formatFileSize(1024 * 1024)).toBe('1 мб')
  expect(formatFileSize(1024 * 1024 * 1024)).toBe('1 гб')
  expect(formatFileSize(1024 * 1024 * 1024 * 1024)).toBe('1 тб')
})

