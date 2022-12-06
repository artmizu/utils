/**
 * Transform an object into a form data
 **/
type Entity = object | number | string | File | boolean

export default function getFormData(obj: { [key: string]: FileList | Entity | Entity[] | undefined | null }) {
  const data = new FormData()

  for (const prop in obj) {
    const el = obj[prop]

    if (el instanceof FileList || (Array.isArray(el) && el.every(i => i instanceof File))) {
      Array.from<File>(el).forEach((el) => {
        data.append(prop, el)
      })
    }
    else if (el instanceof File) {
      data.append(prop, el)
    }
    else if (el instanceof Object) {
      data.append(prop, JSON.stringify(el))
    }
    else if (el !== undefined && el !== null) {
      data.append(prop, el.toString())
    }
  }

  return data
}
