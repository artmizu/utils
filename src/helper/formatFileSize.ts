/**
 * Cyrilic-specific
 * Конвертация байт в более крупные единицы измерения
 *
 * @example
 * formatFileSize(8) // '8 б'
 * formatFileSize(1024) // '1 кб'
 */
export default function formatFileSize(bits: number) {
  const i = Math.floor(Math.log(bits) / Math.log(1024))
  return (
    `${(bits / +(1024 ** i).toFixed(2)) * 1
    } ${['б', 'кб', 'мб', 'гб', 'тб'][i]}`
  )
}
