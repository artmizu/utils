import merge from 'lodash.merge'

/**
 * Useful utility for creating mocks for unit tests
 */
export default function createListFactory<T>(data: T) {
  return (count: number, param?: Partial<T> | ((index: number) => Partial<T>)): T[] => {
    return new Array(count).fill(null).map((_, index) => {
      return merge({}, data, typeof param === 'function' ? param(index) : param)
    })
  }
}
