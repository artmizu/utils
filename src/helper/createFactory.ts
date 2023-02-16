import merge from 'lodash.merge'

/**
 * Useful utility for creating mocks for unit tests
 */
export default function createFactory<T>(data: T) {
  return (param?: Partial<T> | (() => Partial<T>)): T => {
    return merge({}, data, typeof param === 'function' ? param() : param)
  }
}
