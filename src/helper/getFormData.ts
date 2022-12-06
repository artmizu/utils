/**
 * Transform an object into a form data
 **/
export default function getFormData(obj: { [key: string]: FileList | object | number | string | File[] | undefined | null }) {
  const data = new FormData()

  for (const prop in obj) {
    const el = obj[prop]

    if (el instanceof FileList || Array.isArray(el)) {
      Array.from<File>(el).forEach((el) => {
        data.append(prop, el)
      })
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
