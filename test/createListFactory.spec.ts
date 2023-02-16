import { expect, expectTypeOf, it } from 'vitest'
import { createListFactory } from '../'

it('check the factory list', () => {
  const factory = createListFactory({
    name: 'Alex',
    age: 20,
  })
  const data = factory(2, { age: 30 })

  expect(data).toStrictEqual([{
    name: 'Alex',
    age: 30,
  }, {
    name: 'Alex',
    age: 30,
  }])
})

it('check the factory list with a function param', () => {
  const factory = createListFactory({
    name: 'Alex',
    age: 20,
  })
  const data = factory(2, (i) => {
    return {
      age: i,
    }
  })

  expect(data).toStrictEqual([{
    name: 'Alex',
    age: 0,
  }, {
    name: 'Alex',
    age: 1,
  }])
})

it('check the factory list types', () => {
  const factory = createListFactory({
    name: 'Alex',
    age: 20,
  })

  expectTypeOf(factory(2)).toEqualTypeOf<{ name: string; age: number }[]>()
})
