import { expect, it } from 'vitest'
import { paginationArray } from '../'

it('check paginationArray', () => {
  expect(paginationArray({
    visiblePageCount: 5,
    count: 20,
    current: 1,
  })).toEqual([1, 2, 3, '...', 20])

  expect(paginationArray({
    visiblePageCount: 5,
    count: 20,
    current: 1,
    countDelimiterAsPage: false,
  })).toEqual([1, 2, 3, 4, '...', 20])

  expect(paginationArray({
    visiblePageCount: 5,
    count: 20,
    current: 10,
  })).toEqual([1, '...', 10, '...', 20])

  expect(paginationArray({
    visiblePageCount: 5,
    count: 20,
    current: 10,
    countDelimiterAsPage: false,
  })).toEqual([1, '...', 9, 10, 11, '...', 20])

  expect(paginationArray({
    visiblePageCount: 5,
    count: 20,
    current: 19,
  })).toEqual([1, '...', 18, 19, 20])

  expect(paginationArray({
    visiblePageCount: 5,
    count: 20,
    current: 1,
    delimiter: '-',
  })).toEqual([1, 2, 3, '-', 20])
})

