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
  const sequence: AddressEntity[] = [ 'region', 'city', 'district', 'street', 'house', 'apartment', 'entrance', 'floor']
  const tmp: string[] = []

  function appendHint(type: AddressEntity, val: string | number) {
    /**
     * К городу не подставляем букву «г.» т.к. там могут быть не только города но и значения по
     * типу «Посёлок городского типа» для которых подпись «г.» не актуальна
     *
     * Для улицы ситуация аналогична, порой из подсказок яндекса приходит к улице сразу подпись «улица Ленина»
     * и чтобы не было «ул. улица Ленина» - подпись не пишем. Также есть всякие проспекты, для которых «ул» также
     * не актуален
     */
    if (type === 'region')
    return `${val}`
    else if (type === 'city')
      return `${val}`
    else if (type === 'district')
      return `${val}`
    else if (type === 'street')
      return `${val}`
    else if (type === 'house')
      return `дом ${val}`
    else if (type === 'apartment')
      return `кв. ${val}`
    else if (type === 'entrance')
      return `${val} подъезд`
    else if (type === 'floor')
      return `${val} этаж`
  }

  sequence.forEach((type) => {
    const val = address[type]
    if (val) {
      const text = appendHint(type, val)
      if (text)
        tmp.push(text)
    }
  })

  if (tmp.length > 0)
    return tmp.join(', ')
  else
    return ''
}
