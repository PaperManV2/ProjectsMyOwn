export default function textFit(element) {
  if (!element) return
  let fontSize // Start with a base font size

  console.log(element.textContent)
  if (Number(element.textContent)) {
    let a = element.textContent.length - 7
    console.log(a)
    if (a > 0) {
      fontSize = 10 - a * 0.7
    } else fontSize = 10
  } else {
    fontSize = 10
  }
  element.style.fontSize = fontSize + 'vw'
}
