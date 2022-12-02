interface ConditionViewParams {
  /**
   * Unique identifier for displaying a specific object by a certain condition
   */
  identifyer: string
  /**
   * Interval between shows in days
   */
  interval?: number
  /**
   * How many times do you need to show something
   */
  count?: number
  /**
   * For which platform you need to show something, the platform is determined by the User Agent
   */
  showForCertainOS?: string[] | string
}

/**
 * This function can tell whether something needs to be shown to the client or not under certain conditions:
 * - Client platform type
 * - He's already seen it or not
 * - How many times you need to show something and with what interval between shows
 *
 * Keep in mind that this script is only for the client, since it uses the navigator object
 */
export default function conditionView({ identifyer, interval = 14, count = 1, showForCertainOS }: ConditionViewParams) {
  const userAgent = navigator.userAgent.toLowerCase()
  let needToShow = false
  if (isProperOS(showForCertainOS)) {
    const fromStore = window.localStorage.getItem(`сonditions-view-${identifyer}`)?.split(',') || []
    const startDate = fromStore[0] && new Date(fromStore[0])
    const showCount = fromStore[1] && parseInt(fromStore[1])
    if (startDate && showCount) {
      if (daysPassed(startDate) >= interval && showCount > 1) {
        window.localStorage.setItem(`сonditions-view-${identifyer}`, JSON.stringify([new Date().toISOString(), showCount - 1]))
        needToShow = true
      }
    }
    else {
      window.localStorage.setItem(`сonditions-view-${identifyer}`, JSON.stringify([new Date().toISOString(), count]))
      needToShow = true
    }
  }

  function isProperOS(os?: string | string[]) {
    if (os) {
      if (Array.isArray(os))
        return os.some(el => !!userAgent.includes(el.toLowerCase()))
      else
        return !!userAgent.includes(os.toLowerCase())
    }
    else {
      return true
    }
  }

  function daysPassed(startDate: Date) {
    const start = startDate.getTime()
    const current = new Date().getTime()
    return Math.round((current - start) / 1000 / 60 / 60 / 24)
  }

  function isNeedToShow() {
    return needToShow
  }

  return {
    isNeedToShow,
  }
}
