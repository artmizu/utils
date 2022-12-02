/**
 * Cyrilic-specific
 * Склонение существительных
 * ["яблоко", "яблока", "яблок"]
 *      1         2        5
 *
 * @example
 * declination(10, ["яблоко", "яблока", "яблок"]) // "яблок"
 */

export default function declination(n: number, titles: [string, string, string]) {
  return titles[
    n % 10 === 1 && n % 100 !== 11
      ? 0
      : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)
        ? 1
        : 2
  ]
}
