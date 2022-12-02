/**
 * Cyrilic-specific
 *
 * Вариант функции для форматирования телефона, его особенности:
 * - Он работаем сам по себе и включается в себя форматирование номера и создание маски для него
 * - Он условно легковесный, не включает в себя никакие итераторы или сложные регулярки, лишь простые условия и формирования строк
 *
 * @example
 * formatPhoneAndMask(9358511923) // '7 (935) 851-19-23'
 * formatPhoneAndMask(79358511923) // '7 (935) 851-19-23'
 * formatPhoneAndMask(7935851) // '7 (935) 851'
 */
export default function formatPhoneAndMask(val: string) {
  let phoneNumber: string = val.replace(/[^\d]/g, '')
  if (phoneNumber[0] !== '8' && phoneNumber[0] !== '7')
    phoneNumber = `7${phoneNumber}`
  else if (phoneNumber.length > 1)
    phoneNumber = `7${phoneNumber.substring(1)}`
  else
    phoneNumber = '7'

  if (phoneNumber.length === 1) {
    return `+${phoneNumber[0]}`
  }
  else if (phoneNumber.length < 5) {
    return `+${phoneNumber[0]} (${phoneNumber.substring(1)}`
  }
  else if (phoneNumber.length < 8) {
    return `+${phoneNumber[0]} (${phoneNumber.substring(1, 4)}) ${phoneNumber.substring(4)}`
  }
  else if (phoneNumber.length < 10) {
    return `+${phoneNumber[0]} (${phoneNumber.substring(1, 4)}) ${phoneNumber.substring(4, 7)}-${phoneNumber.substring(7)}`
  }
  else {
    return `+${phoneNumber[0]} (${phoneNumber.substring(1, 4)}) ${phoneNumber.substring(4, 7)}-${phoneNumber.substring(
      7,
      9,
    )}-${phoneNumber.substring(9, 11)}`
  }
}
