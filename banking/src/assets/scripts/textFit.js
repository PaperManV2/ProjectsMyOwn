export default function textFit(element, minFontSize) {
  if (!element) return
  let fontSize // Start with a base font size
  if (Number(element.textContent)) {
    let a = element.textContent.length - 7
    if (a > 0) {
      fontSize = minFontSize - a * 0.7
    } else fontSize = minFontSize
  } else {
    fontSize = minFontSize
  }
  element.style.fontSize = fontSize + 'vw'
}
