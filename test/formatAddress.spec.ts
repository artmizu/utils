import { expect, it } from 'vitest'
import { formatAddress } from '../'

it('check simple', () => {
  const address = formatAddress({
    city: 'Ижевск',
    street: 'Удмуртская',
    house: '20',
  })

  expect(address).toBe('Ижевск, Удмуртская, дом 20')
})

it('check complex', () => {
  const address = formatAddress({
    city: 'Ижевск',
    district: 'Завьяловский',
    street: 'Удмуртская',
    house: '20',
    apartment: 30,
    entrance: '3',
    floor: 4,
  })

  expect(address).toBe('Ижевск, Завьяловский, Удмуртская, дом 20, кв. 30, 3 подъезд, 4 этаж')
})
