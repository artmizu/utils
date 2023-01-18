/**
 * Client-only util, computed width of the element with left and right margins
 */
export default function getWidthWithMargin(el: Element) {
  return el.getBoundingClientRect().width + parseInt(window.getComputedStyle(el).marginLeft) + parseInt(window.getComputedStyle(el).marginRight)
}
