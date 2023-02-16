import { expect, expectTypeOf, it } from 'vitest'
import { createFactory } from '../'

it('check the factory', () => {
  const factory = createFactory({
    name: 'Alex',
    age: 20,
  })
  const data = factory({ age: 30 })

  expect(data).toStrictEqual({
    name: 'Alex',
    age: 30,
  })
})

it('check the factory with a function param', () => {
  const factory = createFactory({
    name: 'Alex',
    age: 20,
  })
  const data = factory(() => {
    return { age: 30 }
  })

  expect(data).toStrictEqual({
    name: 'Alex',
    age: 30,
  })
})

it('check the factory types', () => {
  const factory = createFactory({
    name: 'Alex',
    age: 20,
  })

  expectTypeOf(factory()).toEqualTypeOf<{ name: string; age: number }>()
})
