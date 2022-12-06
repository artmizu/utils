import { expect, it, vi } from 'vitest'
import { getFormData } from '../'

it('check getFormData', () => {
  const appendFn = vi.fn()
  const FormData = vi.fn(() => ({
    append: appendFn,
    get: vi.fn(),
  }))

  vi.stubGlobal('FormData', FormData)
  vi.stubGlobal('FileList', class FileList { })
  vi.stubGlobal('File', class File { })

  const obj = {
    a: true,
    x: 10,
    y: 'somevalue',
    z: ['1', '2'],
    t: [{ z: 1, x: 2 }, { z: 10, w: 20 }],
    w: undefined,
    r: null,
  }

  getFormData(obj)
  expect(appendFn.mock.calls).toEqual([['a', 'true'], ['x', '10'], ['y', 'somevalue'], ['z', '["1","2"]'], ['t', '[{"z":1,"x":2},{"z":10,"w":20}]']])
})
