import { expect, it, vi } from 'vitest'
import { getFormData } from '../'

it('check getFormData', () => {
  const appendFn = vi.fn()
  const FormData = vi.fn(() => ({
    append: appendFn,
    get: vi.fn(),
  }))

  vi.stubGlobal('FormData', FormData)
  vi.stubGlobal('FileList', Array)

  const obj = {
    x: 10,
    y: 'somevalue',
    z: ['1', '2'],
  }

  getFormData(obj)
  expect(appendFn.mock.calls).toEqual([['x', '10'], ['y', 'somevalue'], ['z', '1'], ['z', '2']])
})
