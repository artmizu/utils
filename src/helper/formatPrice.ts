/**
 * Price formatter
 *
 * @example
 * formatPrice(1000000) // '1 000 000'
 * formatPrice(10000) // '10 000'
 * formatPrice(1000) // '1 000'
 */
export default function formatPrice(val: string | number) {
  return val.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')
}
