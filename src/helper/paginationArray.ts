interface PaginationArrayParams {
  /**
   * Total page count
   */
  count: number
  /**
   * Current page number
   */
  current: number
  /**
   * Number of pages that should be visible
   */
  visiblePageCount?: number
  /**
   * Separator between the outermost pages and the current page
   */
  delimiter?: string
  /**
   * When calculating an array, the separator must or must not count as a page
   */
  countDelimiterAsPage?: boolean
}

/**
 * Function that calculates an array, which can be used as a handly helper for the pagination UI componnet, because it encapsulate a lot of logic
 * @example
 * paginationArray({ visiblePageCount: 5, count: 20, current: 6 }) // [1, '...', 5, 6, 7, '...', 20]
 * paginationArray({ visiblePageCount: 4, count: 10, current: 9 }) // [1, '...', 8, 9, 10]
 */
export default function paginationArray({ visiblePageCount = 7, count, current, delimiter = '...', countDelimiterAsPage = true }: PaginationArrayParams) {
  let arr: Array<string | number> = createArray({ visiblePageCount, count, current })
  arr = appendSidePages({ arr, delimiter, countDelimiterAsPage })

  function createArray({ visiblePageCount, count, current }: Required<Pick<PaginationArrayParams, 'visiblePageCount' | 'count' | 'current'>>) {
    const arr = [current]
    let i = 2
    let rightFilled = false
    let leftFilled = false

    while (i <= visiblePageCount) {
      if (leftFilled && rightFilled)
        break

      if ((i % 2 === 0 && !rightFilled) || leftFilled)
        append()

      else if ((i % 2 !== 0 && !leftFilled) || rightFilled)
        prepend()
    }

    function append() {
      const num = arr[arr.length - 1] + 1
      if (num <= count) {
        arr.push(num)
        i++
      }
      else {
        rightFilled = true
      }
    }

    function prepend() {
      const num = arr[0] - 1
      if (num >= 1) {
        arr.unshift(num)
        i++
      }
      else {
        leftFilled = true
      }
    }

    return arr
  }

  function appendSidePages({ arr, delimiter, countDelimiterAsPage }: { arr: Array<string | number>; delimiter: string; countDelimiterAsPage: boolean }) {
    if (arr.length !== visiblePageCount)
      return arr

    const lastPageNeeded = arr[arr.length - 1] !== count
    const firstPageNeeded = arr[0] !== 1
    const offset = countDelimiterAsPage ? 2 : 1

    if (lastPageNeeded)
      arr = [...arr.slice(0, arr.length - offset), delimiter, count]

    if (firstPageNeeded)
      arr = [1, delimiter, ...arr.slice(offset, arr.length)]

    return arr
  }

  return arr
}
