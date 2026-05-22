type AddressEntity = 'region' | 'city' | 'district' | 'street' | 'house' | 'apartment' | 'entrance' | 'floor'

/**
 * Cyrilic-specific
 * Форматирование объекта адреса в аккуратную строку
 * @example
 * {
 *  region: 'Удмуртская Республика',
 *  city: 'Ижевск',
 *  district: 'Завьяловский',
 *  street: 'Удмуртская',
 *  house: '20',
 *  apartment: 30,
 *  entrance: '3',
 *  floor: 4,
 * } // 'Удмуртская Республика, Ижевск, Завьяловский, Удмуртская, дом 20, кв. 30, 3 подъезд, 4 этаж'
 */
export default function formatAddress(address: { [key in AddressEntity]?: string | number }) {
  const sequence: AddressEntity[] = ['region', 'city', 'district', 'street', 'house', 'apartment', 'entrance', 'floor']
  const result: string[] = []
  const normalizedCity = address.city ? normalizeAddressPart(address.city) : ''

  function formatPart(type: AddressEntity, value: string | number) {
    /**
     * К городу не подставляем букву «г.» т.к. там могут быть не только города но и значения по
     * типу «Посёлок городского типа» для которых подпись «г.» не актуальна
     *
     * Для улицы ситуация аналогична, порой из подсказок яндекса приходит к улице сразу подпись «улица Ленина»
     * и чтобы не было «ул. улица Ленина» - подпись не пишем. Также есть всякие проспекты, для которых «ул» также
     * не актуален
     */
    if (type === 'region')
      return `${value}`
    else if (type === 'city')
      return `${value}`
    else if (type === 'district')
      return `${value}`
    else if (type === 'street')
      return `${value}`
    else if (type === 'house')
      return `дом ${value}`
    else if (type === 'apartment')
      return `кв. ${value}`
    else if (type === 'entrance')
      return `${value} подъезд`
    else if (type === 'floor')
      return `${value} этаж`
  }

  sequence.forEach((type) => {
    const part = address[type]

    if (type === 'street' && normalizedCity && part && normalizeAddressPart(part) === normalizedCity)
      return

    if (part) {
      const text = formatPart(type, part)

      if (text)
        result.push(text)
    }
  })

  return result.length ? result.join(', ') : ''
}

function normalizeAddressPart(value: string | number) {
  return `${value}`
    .toLowerCase()
    .replaceAll('ё', 'е')
    .replace(/[.,]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/^(г|город)\s+/i, '')
    .replace(/^(ул|улица)\s+/i, '')
}
